import mongoose from 'mongoose';
import { MongoDBConfig } from '../configs';

const MongoDB = {
    devConnectHandler: () => {
        mongoose
            .connect(
                `mongodb+srv://${MongoDBConfig.username}:${MongoDBConfig.password}@studiowedding.exll9vm.mongodb.net/${MongoDBConfig.devEnv}`,
            )
            .then(() => {
                console.log('Mongodb <dev> connection is establishing');
            })
            .catch(() => {
                console.log('Mongodb <dev> connection have something wrong');
            });
    },
    prodConnectHandler: () => {
        mongoose
            .connect(
                `mongodb+srv://${MongoDBConfig.username}:${MongoDBConfig.password}@studiowedding.exll9vm.mongodb.net/${MongoDBConfig.prodEnv}`,
            )
            .then(() => {
                console.log('Mongodb <prod> connection is establishing');
            })
            .catch(() => {
                console.log('Mongodb <prod> connection have something wrong');
            });
    },
};

export default MongoDB;
