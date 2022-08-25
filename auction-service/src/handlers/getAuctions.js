import { nanoid } from 'nanoid';
import { DynamoDB } from 'aws-sdk';
import middy from '@middy/core';
import HTTPJSONBodyParser from '@middy/http-json-body-parser';
import HTTPEventNormalizer from '@middy/http-event-normalizer';
import HTTPErrorHandler from '@middy/http-error-handler';
import createError from 'http-errors';

const dynamoDB = new DynamoDB.DocumentClient();

async function getAuction(event, context) {
	let auctions;
	
	try {
		const result = await dynamoDB.scan({
			 TableName: process.env.AUCTIONS_TABLE_NAME,
		})
	} catch (error) {
		console.error(error);
		
		throw new createError.InternalServerError(error);
	}
	dynamoDB.scan();
	
	return {
		statusCode: 201,
		body: JSON.stringify(auctions),
	};
}

export const handler = middy(getAuction)
	.use(HTTPJSONBodyParser())
	.use(HTTPEventNormalizer())
	.use(HTTPErrorHandler());
