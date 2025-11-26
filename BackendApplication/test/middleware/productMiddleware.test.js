const productService = require('../../service/ProductMiddleware');
const {cartReceiver} = require('../../service/ProductMiddleware');

jest.mock('../../service/ProductMiddleware');

describe('product middleware testing', () => {
    let mockRequest;
    let mockeResponse;
    let mocknext;

    beforeEach(() => {
        
        mockRequest ={
            user: {id: 1},
            body:{}
        };
        mockeResponse = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        }
        mocknext = jest.fn();
        jest.clearAllMocks();
    });

    it('Should give the correct output', async() => {
        mockRequest.body = {username: "john",
                        email: "john@gmail.com",
                        products:[
                    {
      "product_id": 124,
      "name": "Laptop Pro",
      "price": 12000,
      "description": "high performance laptop",
      "quantity": 1
    }
  ]};
        await cartReceiver(mockRequest, mockeResponse, mocknext);
        // expect(mockeResponse.status).toHaveBeenCalledWith(200);
        expect(mocknext).not.toHaveBeenCalled();
    })
})