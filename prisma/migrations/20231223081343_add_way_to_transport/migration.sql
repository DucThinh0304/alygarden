-- CreateEnum
CREATE TYPE "shipping_type" AS ENUM ('pallet', 'freezeTruck', 'containerTruck', 'flatbedTruck', 'air', 'rail');

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "shippingOption" "shipping_type" NOT NULL DEFAULT 'pallet';
