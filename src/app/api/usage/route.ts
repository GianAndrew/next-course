import { NextResponse } from 'next/server';

type Package = {
	totalAllowanceMb: number;
	usedMb: number;
	expirationDate: string;
	activationDate: string;
};
export const GET = async (req: Request) => {
	const data = {
		ussdCode: null,
		esim: {
			status: 'Installed',
			smdpCode: 'Enable, Executed-Success',
			installationDate: '2024-05-03T06:42:09',
			location: {
				updated: '2024-05-19T08:33:12',
				country: 'ES',
				network: 'Movistar',
			},
			kycStatus: null,
			iccid: '8937204016156487642',
			phoneNumber: null,
			puk: '27017782',
			wallet: {
				balanceHkd: 0,
			},
		},
		packages: [
			{
				name: 'Europe USA Yearly 30+5 GB FREE',
				activationDate: '2024-05-16T03:05:13',
				expirationDate: '2025-05-16T03:05:13',
				totalAllowanceMb: 35840,
				totalAllowanceMin: null,
				usedMin: null,
				usedMb: 35840,
			},
			{
				name: 'Europe USA 10+2 GB FREE',
				activationDate: '2024-05-09T20:12:38',
				expirationDate: '2024-05-08T20:12:38',
				totalAllowanceMb: 12288,
				totalAllowanceMin: null,
				usedMin: null,
				usedMb: 12288,
			},
			{
				name: 'Europe USA 10+2 GB FREE',
				activationDate: '2024-05-03T06:43:44',
				expirationDate: '2024-06-02T06:43:44',
				totalAllowanceMb: 12288,
				totalAllowanceMin: null,
				usedMin: null,
				usedMb: 12288,
			},
		],
	};

	const isValidPackage = data.packages.length > 1 ? data.packages.filter((pck) => pck.usedMb !== pck.totalAllowanceMb) : data.packages;

	return NextResponse.json({ ...data, packages: isValidPackage.length > 0 ? isValidPackage : [data.packages[0]] }, { status: 200 });
};
