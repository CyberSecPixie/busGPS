# Bus GPS API

This is the server application that will be running as the middle person between the gps units on the the busses and the front end to display the bus locations.

There is no data being persisted in a database, the application just stores the most recent location data for each route in memory.

### The api endpoints are as follows:

`/api` GET will return the following data:
```typescript
{
  "blue": {
    loc: Number,
    err: String
  },
  "orange": {
    loc: Number,
    err: String
  }
}
```

`/pi` POST expects the following data:
```typescript
{
  line: Number,
  loc: Number,
  status: String //send empty string if status message
}
```
### Keys
```
Blue Line = 1
Orange Line = 2

Location number key:
STOP NUMBERS:
S01 - MAIN GATE
S02 - COMMISSARY
S03 - BLDG 474 (SNCO DORMS)
S04 - BLDG 383 (SFS DORMS)
S05 - BLDG 657 (CE CUST SVC)
S06 - PASSENGER TERMINAL
S07 - DBIDS
S08 - BLDG 936 (MPF/7 AF)
S09 - BX
S10 - IPE
S11 - COMMAND WARRIOR ECP
S12 - BLDG 1601 (GOLF CRSE)
S13 - MUSTANG CENTER

BLUE LINE TRANSFER NUMBERS:
B01 - MAIN GATE				 to		COMMISSARY
B02 - COMMISSARY			 to		BLDG 474 (SNCO DORMS)
B03 - BLDG 474 (SNCO DORMS)  to		BLDG 383 (SFS DORMS)
B04 - BLDG 383 (SFS DORMS)   to		BLDG 657 (CE CUST SVS)
B05 - BLDG 657 (CE CUST SVS) to		PASSENGER TERMINAL
B06 - PASSENGER TERMINAL	 to		DBIDS
B07 - DBIDS					 to		BLDG 936 (MPF/7 AF)
B08 - BLDG 936 MPF/7 AF)	 to		BX
B09 - BX					 to		IPE
B10 - IPE					 to		COMMAND WARRIOR ECP
B11 - COMMAND WARRIOR ECP	 to		BLDG 1601 (GULF CRSE)
B12 - BLDG 1601 (GULF CRSE)  to		MUSTANG CENTER

ORANGE LINE TRANSFER NUMBERS:
O01 - MUSTANG CENTER		 to		BLDG 1601 (GULF CRSE)
O02 - BLDG 1601 (GULF CRSE)  to		COMMAND WARRIOR ECP
O03 - COMMAND WARRIOR ECP	 to		IPE
O04 - IPE					 to		BX
O05 - BX					 to		BLDG 936 (MPF/7 AF)
O06 - BLDG 936 (MPF/7 AF)	 to		DBIDS
O07 - DBIDS					 to		PASSENGER TERMINAL
O08 - PASSENGER TERMINAL	 to		BLDG 657 (CE CUST SVC)
O09 - BLDG 657 (CE CUST SVC) to		BLDG 383 (SFS DORMS)
O10 - BLDG 383 (SFS DORMS)	 to		BLDG 474 (SNCO DORMS)
O11 - BLDG 474 (SNCO DORMS)	 to		COMMISSARY
O12 - COMMISSARY			 to		MAIN GATE
```