import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formLink = process.env.GOOGLE_FORM_LINK;
  if (!formLink) {
    return new NextResponse("Please configure the env variables", {
      status: 500,
    });
  }

  const fieldIdFirstName : any = process.env.GOOGLE_FORM_FIELD_ID_FIRST_NAME;
  const fieldIdLastName : any = process.env.GOOGLE_FORM_FIELD_ID_LAST_NAME;
  const fieldIdMessage : any = process.env.GOOGLE_FORM_FIELD_ID_MESSAGE;
  const fieldIdEmail : any = process.env.GOOGLE_FORM_FIELD_ID_EMAIL;

  try {
    const body = await req.json();
    const { firstName, message, lastName, email } = body;

    const formData = new URLSearchParams({
      [fieldIdFirstName]: firstName,
      [fieldIdEmail]: email,
      [fieldIdMessage]: message,
      [fieldIdLastName]: lastName,
    }).toString();
    
    const res = await fetch(`${formLink}/formResponse`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData,
    });

    if (res.ok) {
      return NextResponse.json("Success!");
    } else {
      console.error('Error:', res.statusText);
      return new NextResponse("Failed to submit form", { status: 500 });
    }
  } catch (error) {
    console.error('Error:', error);
    return new NextResponse("Internal error", { status: 500 });
  }
}