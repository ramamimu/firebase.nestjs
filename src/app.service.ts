import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { db } from './firebase/config';
import { collection, getDocs } from 'firebase/firestore';

@Injectable()
export class AppService {
  async getHello() {
    let tempChart = [];
    try {
      const querySnapshot = await getDocs(collection(db, 'chart'));
      querySnapshot.forEach((doc) => {
        console.log(doc.id, ' => ', doc.data());
        const objChart = {
          id: doc.id,
          ...doc.data(),
        };
        tempChart.push(objChart);
      });
    } catch (error) {
      console.log(error);
    }
    return tempChart;
  }

  getTest() {
    return 'test';
  }
}
