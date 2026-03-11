import { Button } from "@/components/ui/button";
import { CircleCheck } from "lucide-react";
import Link from "next/link";

import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { stripe } from "@/lib/stripe";
import { getCourseDetails } from "@/queries/courses";
import { getUserByEmail } from "@/queries/users";

import { sendEmails } from "@/lib/emails";

import { enrollForCourse } from "@/queries/enrollments";

const Success = async ({ searchParams: { session_id, courseId } }) => {
  console.log("=== ENROLL SUCCESS PAGE ===");
  console.log("session_id:", session_id);
  console.log("courseId:", courseId);

  if (!session_id)
    throw new Error("Please provide a valid session id that starts with cs_");

  const userSession = await auth();

  if (!userSession?.user?.email) {
    redirect("/login");
  }

  const course = await getCourseDetails(courseId);
  const loggedInUser = await getUserByEmail(userSession?.user?.email);

  console.log("Retrieving Stripe session...");
  const checkoutSession = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ["line_items", "payment_intent"],
  });

  console.log("=== FULL STRIPE SESSION ===");
  console.log(JSON.stringify(checkoutSession, null, 2));
  console.log("=== END STRIPE SESSION ===");

  console.log("checkoutSession.status:", checkoutSession?.status);
  console.log(
    "checkoutSession.payment_status:",
    checkoutSession?.payment_status,
  );
  console.log(
    "checkoutSession.payment_intent:",
    checkoutSession?.payment_intent,
  );
  console.log(
    "checkoutSession.payment_intent?.status:",
    checkoutSession?.payment_intent?.status,
  );

  const paymentStatus =
    checkoutSession?.payment_intent?.status ?? checkoutSession?.status;

  console.log("Resolved paymentStatus:", paymentStatus);

  // Customer info
  const customerName = `${loggedInUser?.firstName} ${loggedInUser?.lastName}`;
  const customerEmail = loggedInUser?.email;
  const productName = course?.title;
  console.log("Customer:", customerName, customerEmail);
  console.log("Product:", productName);

  const shouldEnroll =
    paymentStatus === "succeeded" || checkoutSession?.status === "complete";

  console.log("shouldEnroll:", shouldEnroll);

  if (shouldEnroll) {
    console.log("=== ENROLLING USER ===");
    console.log("course.id:", course?.id, "user.id:", loggedInUser?.id);

    const enrolled = await enrollForCourse(
      course?.id,
      loggedInUser?.id,
      "stripe",
    );
    console.log("Enrollment result:", enrolled);

    const instructorName = `${course?.instructor?.firstName} ${course?.instructor?.lastName}`;
    const instructorEmail = course?.instructor?.email;

    console.log("Instructor:", instructorName, instructorEmail);

    const emailsToSend = [
      {
        to: instructorEmail,
        subject: `New Enrollment for ${productName}.`,
        message: `Congratulations, ${instructorName}. A new student, ${customerName} has enrolled to your course ${productName} just now. Please check the instructor dashboard and give a high-five to your new student.`,
      },
      {
        to: customerEmail,
        subject: `Enrollment Success for ${productName}`,
        message: `Hey ${customerName} You have successfully enrolled for the course ${productName}`,
      },
    ];

    console.log("=== SENDING EMAILS ===");
    console.log("Emails to send:", JSON.stringify(emailsToSend, null, 2));

    const emailSentResponse = await sendEmails(emailsToSend);
    console.log("Email response:", JSON.stringify(emailSentResponse, null, 2));
  }

  return (
    <div className="h-full w-full flex-1 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-6 max-w-[600px] text-center">
        {shouldEnroll && (
          <>
            <CircleCheck className="w-32 h-32 bg-success rounded-full p-0 text-white" />
            <h1 className="text-xl md:text-2xl lg:text-3xl">
              Congratulations, <strong>{customerName}</strong>! Your Enrollment
              was Successful for <strong>{productName}</strong>
            </h1>
          </>
        )}
        <div className="flex items-center gap-3">
          <Button asChild size="sm">
            <Link href="/courses">Browse Courses</Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link href={`/courses/${courseId}/lesson`}>Play Course</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Success;
