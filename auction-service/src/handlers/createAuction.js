import { nanoid } from 'nanoid';
import { DynamoDB } from 'aws-sdk';
import middy from '@middy/core';
import HTTPJSONBodyParser from '@middy/http-json-body-parser';
import HTTPEventNormalizer from '@middy/http-event-normalizer';
import HTTPErrorHandler from '@middy/http-error-handler';
import createError from 'http-errors';

const dynamoDB = new DynamoDB.DocumentClient();

async function createAuction(event, context) {
	const { title } = event.body;
	const now = new Date();
	const auction = {
		id: nanoid(),
		title,
		status: 'OPEN',
		createdAt: now.toISOString(),
	};
	
	try {
		await dynamoDB.put({
			TableName: process.env.AUCTIONS_TABLE_NAME,
			Item: auction,
		}).promise();
	} catch(error) {
		console.log(error);
		
		throw new createError.InternalServerError(error);
	}
	
	return {
		statusCode: 201,
		body: JSON.stringify(auction),
	};
}

export const handler = middy(createAuction)
	.use(HTTPJSONBodyParser())
	.use(HTTPEventNormalizer())
	.use(HTTPErrorHandler());
