### Run the app

- Run the app using 
`npm run dev`

- Run the app with nodemon using 
`npm run dev-nodemon`

The app runs on port 3001 (see env file). Send a POST request to http://localhost:3001 
Include a JSON body like this: 

```json
{
	"email": "nphopse@ocff-pinkpoodle-git.com",
	"password": "7NQ6!8uL",
	"consumer": {
		"addresses": [{
			"additionalAddressInfo": "to care of: Mrs. Müller",
			"city": "Langenfeld",
			"country": "DE",
			"province": "NRW",
			"customAttributes": {},
			"houseNumber": "42a",
			"phoneNumbers": [{
				"customAttributes": {},
				"label": "string",
				"type": "MOBILE",
				"value": "string"
			}],
			"postalCode": "40764",
			"street": "Hauptstr.",
			"companyName": "Speedy Boxales Ltd.",
			"firstName": "Maxine",
			"lastName": "Muller",
			"salutation": "Frau"
		}],
		"customAttributes": {},
		"email": "max@speedyboxales.com"
	},
	"customAttributes": {},
	"deliveryPreferences": {
		"shipping": {
			"preferredCarriers": [
				"string"
			],
			"preselectedFacilities": [{
				"facilityRef": "string"
			}],
			"serviceLevel": "DELIVERY",
			"servicetype": "BEST_EFFORT"
		},
		"supplyingFacilities": [
			"928f3730-bc48-4d85-b83f-3fd86b776178"
		],
		"targetTime": "2020-02-03T09:45:51.525Z"
	},
	"orderDate": "2020-02-03T08:45:50.525Z",
	"orderLineItems": [{
		"article": {
			"customAttributes": {},
			"imageUrl": "string",
			"tenantArticleId": "4711",
			"title": "Cologne Water",
			"weight": 0,
			"attributes": [{
				"category": "descriptive",
				"key": "%%subtitle%%",
				"priority": 100,
				"value": "585er Gold"
			}]
		},
		"customAttributes": {},
		"measurementUnitKey": "liter",
		"quantity": 21,
		"scannableCodes": [
			"string"
		],
		"shopPrice": 1200
	}],
	"status": "OPEN",
	"tenantOrderId": "R456728546"
}
```