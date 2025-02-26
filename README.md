# Vendor App Backend

## Setup Instructions

### Prerequisites
- Install [Node.js](https://nodejs.org/)
- Install [MongoDB](https://www.mongodb.com/)
- Install `curl` (if not already installed)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/thriftr/vendor-backend.git
   cd vendor-app-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file and configure environment variables (if required).

4. Start the backend server:
   ```bash
   npm start
   ```

### API Endpoints
- **Host:** `https://vendor-backend-production.up.railway.app`

#### Register a Vendor
- **Endpoint:** `POST /register`
- **Request:**
  ```bash
  curl -X POST https://vendor-backend-production.up.railway.app/register \
       -H "Content-Type: application/json" \
       -d "{\"name\": \"Meghraj Doe\", \"phone\": \"8765785686\", \"email\": \"meg_john@example.com\", \"storeName\": \"Meghraj's Store\", \"panCard\": \"ABCDE1278634F\", \"employerId\": \"EMP123467785\", \"gstin\": \"22AAAAA0065760A1Z5\"}"
  ```
- **Expected Response:**
  ```json
  {
    "message": "Vendor registered successfully",
    "vendor": {
      "name": "Meghraj Doe",
      "phone": "8765785686",
      "email": "meg_john@example.com",
      "storeName": "Meghraj's Store",
      "panCard": "ABCDE1278634F",
      "employerId": "EMP123467785",
      "gstin": "22AAAAA0065760A1Z5",
      "approved": false,
      "_id": "67be1e29c9787ffd13d1eb2a",
      "__v": 0
    }
  }
  ```

#### Get Vendor Details
- **Endpoint:** `GET /vendor/{vendorId}`
- **Request:**
  ```bash
  curl -X GET https://vendor-backend-production.up.railway.app/vendor/67be1e29c9787ffd13d1eb2a \
       -H "Content-Type: application/json"
  ```
- **Expected Response:**
  ```json
  {
    "name": "Meghraj Doe",
    "phone": "8765785686",
    "email": "meg_john@example.com",
    "storeName": "Meghraj's Store",
    "panCard": "ABCDE1278634F",
    "employerId": "EMP123467785",
    "gstin": "22AAAAA0065760A1Z5",
    "approved": false,
    "_id": "67be1f95c9787ffd13d1eb2d",
    "__v": 0
  }
  ```

### Troubleshooting
#### Server Not Responding
- Ensure the backend is running: `npm start`
- Check if MongoDB is running
- Verify the correct port (`5001`) in `.env` and API requests

#### JSON Parsing Issues in `curl`
- Use escaped quotes inside JSON values
- Validate JSON formatting before sending requests

### License
This project is licensed under the MIT License.

