import { deepUpdate } from 'immupdate';

export const updateDeepProperty = ({
	obj,
	path,
	value
}: {
	obj: any;
	path: string;
	value: any;
}) => {
	const pathSegments = path.split('.');

	return pathSegments.reduce((acc: any, segment, i) => {
		const isNumeric = /^\d+$/.test(segment);
		const key = isNumeric ? Number(segment) : segment;

		if (i === 0) {
			return deepUpdate(obj).at(key);
		}

		if (i === pathSegments.length - 1) {
			return acc.at(key).set(value);
		}

		return acc.at(key);
	}, null);
};

export const getDeepProperty = ({ obj, path }: { obj: any; path: string }) => {
	const res = path.split('.').reduce((acc: any, segment) => {
		const isNumeric = /^\d+$/.test(segment);
		const key = isNumeric ? Number(segment) : segment;
		return acc[key];
	}, obj);

	return res;
};

const sample = {
	someInfo: {
		name: 'Sample Name',
		phone: '123-456-7890',
		fax: '123-456-7891'
	},
	estimateInfos: [
		{
			formInfo: {
				toName: 'ㅇㅇㅇ귀하',
				companyName: '삼성전자',
				companyPhone: '123-4123-4444',
				createdTime: '2025-07-10 18:47:15',
				email: 'test@gmail.com',
				fax: '',
				id: 'b1e071f46c91418d9649c375f9c32231',
				name: '한준혁',
				reserveState: '완료'
			},
			reserveInfos: [
				{
					departureDate: '2025-07-17',
					destination: '',
					arriveTime: '2025-07-17 09:00',
					memo: '',
					passengerCount: '',
					period: 'oneWay',
					pricePerUnit: '',
					Unit: '',
					time: '2025-07-13 01:07:00',
					vehicleType: '15-solaty',
					isTaxIncluded: false
				},
				{
					departureDate: '2025-07-17',
					destination: '',
					arriveTime: '2025-07-17 09:00',
					memo: '222',
					passengerCount: '',
					period: 'oneWay',
					pricePerUnit: '',
					Unit: '',
					time: '2025-07-13 01:07:00',
					vehicleType: '15-solaty',
					isTaxIncluded: false
				}
			],
			estimateInfo: {
				options: ['봉사료'],
				memo: ''
			}
		},
		{
			formInfo: {
				toName: 'ㅇㅇㅇ귀하',
				companyName: '삼성전자',
				companyPhone: '123-4123-4444',
				createdTime: '2025-07-10 18:47:15',
				email: 'test@gmail.com',
				fax: '',
				id: 'b1e071f46c91418d9649c375f9c32231',
				name: '한준혁12',
				reserveState: '완료'
			},
			reserveInfos: [
				{
					departureDate: '2025-07-17',
					destination: '',
					arriveTime: '2025-07-17 09:00',
					memo: '',
					passengerCount: '',
					period: 'oneWay',
					pricePerUnit: '',
					Unit: '',
					time: '2025-07-13 01:07:00',
					vehicleType: '15-solaty',
					isTaxIncluded: false
				},
				{
					departureDate: '2025-07-17',
					destination: '',
					arriveTime: '2025-07-17 09:00',
					memo: '222',
					passengerCount: '',
					period: 'oneWay',
					pricePerUnit: '',
					Unit: '',
					time: '2025-07-13 01:07:00',
					vehicleType: '15-solaty',
					isTaxIncluded: false
				}
			],
			estimateInfo: {
				options: ['봉사료'],
				memo: ''
			}
		}
	]
};

const run = () => {
	return updateDeepProperty({
		obj: sample,
		path: 'estimateInfos.0.formInfo.name',
		value: 'New Name'
	});
};

console.log(run().estimateInfos[0].formInfo.name); // 'New Name'
console.log(getDeepProperty({ obj: sample, path: 'estimateInfos.1.formInfo.name' })); // 'New Name'
