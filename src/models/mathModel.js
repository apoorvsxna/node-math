const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient(); 

const mathModel = {
  async saveResult(operation, value) {

    try {
        
      return await prisma.result.create({
        data: {
          operation, 
          value
        }
      });
    } catch (error) {
      console.error("Error saving result", error);
      throw error;
    }
  }
};

module.exports = mathModel;
