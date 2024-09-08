import express, { NextFunction, Request, Response } from "express";
import { logger, MessageBroker, PublishType } from "../utils";
import { OrderEvent } from "../types";

const router = express.Router();

router.post(
  "/order",
  async (req: Request, res: Response, next: NextFunction) => {
console.log(req.body)
     // order create logic
logger.info("test")
    // 3rd step: publish the message

    const message:PublishType={
      "topic": "OrderEvents",
      "headers": { token: req.headers.authorization },
      "event": OrderEvent.CREATE_ORDER,
      "message": {
        "orderId": 1,
        "items": [
          {
            productId: 1,
            quantity: 1,
          },
          {
            productId: 2,
            quantity: 2,
          },
        ],
      },
    };

    console.log(message)
    await MessageBroker.publish(message);


    return res.status(200).json({ message: "create order" });
  }
);

router.get(
  "/order",
  async (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({ message: "create order" });
  }
);

router.get(
  "/order/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({ message: "create order" });
  }
);

router.delete(
  "/order/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({ message: "create order" });
  }
);

export default router;
