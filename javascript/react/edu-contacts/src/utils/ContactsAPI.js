import request from 'superagent/lib/client';

export default {
    getContacts: (url) => {
        return new Promise((resolve, reject) => {
            request
            .get(url)
            .end((error, response) => {
                if(error) reject(error);
                resolve(JSON.parse(response.text));
            })
        });
    },
    saveContact: (url, contact) => {
        return new Promise((resolve, reject) => {
            request
            .post(url)
            .send(contact)
            .end((error, response) => {
                if(error) reject(error);
                resolve(JSON.parse(response.text));
            })
        });
    },
    deleteContact: (url) => {
        return new Promise((resolve, reject) => {
            request
            .delete(url)
            .end((error, response) => {
                if(error) reject(error);
                resolve(JSON.parse(response.text));
            })
        });
    }
}