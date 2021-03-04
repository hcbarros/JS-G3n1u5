
'use strict';
import axios, {AxiosInstance, AxiosResponse} from 'axios';


export default class GeniusApi {

  /**
   * @returns {Promise<AxiosResponse<Score[]>>}
   */
  static async getRanking() {
    const request = await this.getAxios();
    return request.get('/ranking');
  }

  /**
   * @static
   * @returns {Promise<AxiosResponse<voidl>>}
   */
  static async saveScore(username) {
    const request = await this.getAxios();
    return request.post(`/users/${username}`);
  }

 
  /**
   * @returns {Promise<AxiosInstance>}
   */
  static async getAxios() {
    return axios.create({
      baseURL: 'https://us-central1-prova-front-letras.cloudfunctions.net',
    });
  }

}

/**
 * @typedef {Object} Score
 * @property {string} email
 * @property {number} followers
 */
