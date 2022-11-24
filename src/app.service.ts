import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { db } from './firebase/config';
import { collection, getDocs, doc, setDoc, deleteDoc } from 'firebase/firestore';

@Injectable()
export class AppService {
  async getAllData() {
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

  async getData(id: string) {
    let tempChart;
    try {
      const querySnapshot = await getDocs(collection(db, 'chart'));
      querySnapshot.forEach((doc) => {
        console.log(doc.id, ' => ', doc.data());
        const objChart = {
          id: doc.id,
          ...doc.data(),
        };
        if (id == objChart.id) tempChart = objChart;
      });
    } catch (error) {
      console.log(error);
    }
    return tempChart;
  }

  async insertData(total: number) {
    try {
      const tempData = {
        total: total,
      };
      await setDoc(doc(collection(db, 'chart')), tempData);
      return 'data successfully inserted';
    } catch (error) {
      console.log(error);
    }
  }

  async updateData(id: string, total: number) {
    try {
      const tempData = {
        total: total,
      };
      await setDoc(doc(db, 'chart', id), tempData);
      return 'data successfully edited';
    } catch (error) {
      console.log(error);
    }
  }

  async deleteData(id: string) {
    try {
      await deleteDoc(doc(db, 'chart', id));
      return 'data successfully deleted';
    } catch (err) {
      console.log(err);
    }
  }

  getTest() {
    return 'test';
  }
}
