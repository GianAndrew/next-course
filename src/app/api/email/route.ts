import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const POST = async () => {
	try {
		const transport = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: 'delrosariogianandrew@gmail.com',
				pass: 'eygb gqim aunc ubmk',
			},
		});
		await transport.verify();

		const sendResult = await transport.sendMail({
			from: 'delrosariogianandrew@gmail.com',
			to: 'giandrewdelrosario@gmail.com',
			subject: 'Testing Email',
			text: 'Testing Email, Hello World',
		});
		return NextResponse.json(sendResult, {
			status: 200,
		});
	} catch (error) {
		return NextResponse.json(error, { status: 500 });
	}
};
