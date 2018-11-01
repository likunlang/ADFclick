const links = [
    //2 138*** 5188
    // [
    //     'http://trafficbank.idouzi.com/api/details?id=5bda3701d657fe2c481820c3&flowMainId=5188&t=1541029651&sign=7f56cbd4446a2fabc7ea5a71c6dd3271',
    //     'http://trafficbank.idouzi.com/api/details?id=5bda36fad657fe1bf6581373&flowMainId=5188&t=1541029660&sign=2345c22b71610c9e92a396eebfb2da99',
    // ],
    //B1 5207
    [
        'http://trafficbank.idouzi.com/api/details?id=5bdb266ed657fe5992366033&flowMainId=5207&t=1541090486&sign=8fdbcf1fd24aadf9bace5a5fe455db04',
        'http://trafficbank.idouzi.com/api/details?id=5bdb266ad657fe48db0a03d3&flowMainId=5207&t=1541090499&sign=bd1f72252d484f072c8fe87f3e339a35',
    ],
    //B2 5286
    [
        'http://trafficbank.idouzi.com/api/details?id=5bdb2672d657fe69d0433f13&flowMainId=5286&t=1541090441&sign=830e6844b1eb0e4e0f9f6320cb0b4abc',
        'http://trafficbank.idouzi.com/api/details?id=5bdb2c4dd657fe012c21f2d3&flowMainId=5286&t=1541090425&sign=34ae885992e57307f05cbef1309e69c4',
    ],
    //黑 5295
    [
        'http://trafficbank.idouzi.com/api/details?id=5bdb2bcdd657fe45300f30e3&flowMainId=5295&t=1541090393&sign=b371cadfb837e6d8e76207f817c27c50',
        'http://trafficbank.idouzi.com/api/details?id=5bdb2c19d657fe2aaa5b9143&flowMainId=5295&t=1541090377&sign=2c2914e9fdd2eb88e29ee7e91919cd10',
    ],
    //1 176*** 1125
    [
        'http://trafficbank.idouzi.com/api/details?id=5bdb2e47d657fe3cad2f2053&flowMainId=1125&t=1541090989&sign=101ad05b360e1a40538b30864bf2d408',
        'http://trafficbank.idouzi.com/api/details?id=5bdb2e52d657fe6936212fb3&flowMainId=1125&t=1541090979&sign=2e079431c2097587ac2c80acf732e847',
    ],
    //1_642 5683
    [
        'http://trafficbank.idouzi.com/api/details?id=5bdb265ad657fe0d143eac33&flowMainId=5683&t=1541090654&sign=2214d21f918bdeb5d773d48b659ed97a',
        'http://trafficbank.idouzi.com/api/details?id=5bdb2662d657fe2a8c746f33&flowMainId=5683&t=1541090643&sign=2864857d8433e8a0588c2f4788b0ba9e',
    ],
    //2_648 5667
    [
        'http://trafficbank.idouzi.com/api/details?id=5bdb2cfbd657fe55274270f3&flowMainId=5667&t=1541090599&sign=1abb50f4f3ca3bce96c365da70a99921',
        'http://trafficbank.idouzi.com/api/details?id=5bdb2d02d657fe654b130753&flowMainId=5667&t=1541090590&sign=ac1548068f3f3547927bb813d0bd8375',
    ],
    //3_674 5688
    [
        'http://trafficbank.idouzi.com/api/details?id=5bdb2d7ad657fe0f9960d303&flowMainId=5688&t=1541090745&sign=d22c099dc35e2e5c8154abc368a0f74b',
        'http://trafficbank.idouzi.com/api/details?id=5bdb2d9ad657fe6cd236b4b3&flowMainId=5688&t=1541090736&sign=233739970e5d863b9cbdf2579468064f',
    ],
    //4_654 5703
    [
        'http://trafficbank.idouzi.com/api/details?id=5bdb264fd657fe3c13492793&flowMainId=5703&t=1541090703&sign=e55301f724a70c26463f818b1939a244',
        'http://trafficbank.idouzi.com/api/details?id=5bdb265ad657fe0d143eac33&flowMainId=5703&t=1541090691&sign=6d4ecdebbed53144cba5ede487a2699f',
    ],
    //5_664 5731
    [
        'http://trafficbank.idouzi.com/api/details?id=5bdb279bd657fe59b658c9b3&flowMainId=5731&t=1541090819&sign=102e695d8ead68b2d19c65d8f49e0b67',
        'http://trafficbank.idouzi.com/api/details?id=5bdb27dcd657fe6726068de3&flowMainId=5731&t=1541090808&sign=dda1a1e5622c56ff19ecb9a669028d53',
    ],
    //6_643 5765
    [
        'http://trafficbank.idouzi.com/api/details?id=5bdb2781d657fe1a8f7ab7a3&flowMainId=5765&t=1541090923&sign=e5e7b436c700f67bb382684d8f1c5409',
        'http://trafficbank.idouzi.com/api/details?id=5bdb2784d657fe48050aafd3&flowMainId=5765&t=1541090914&sign=09d52b2b2fd5e442ec2608dc7d40b25b',
    ],

    //7_647 5830
    [
        'http://trafficbank.idouzi.com/api/details?id=5bdaef55d657fe60c1165b53&flowMainId=5830&t=1541091036&sign=3af80264a879542f1737eeb0fca6ff74',
        'http://trafficbank.idouzi.com/api/details?id=5bdaef5ad657fe79d84db9e3&flowMainId=5830&t=1541091026&sign=e780e22780c26f6cc10221add778a12f',
    ],
    //8_644 5894
    [
        'http://trafficbank.idouzi.com/api/details?id=5bdb2f6ed657fe6060752983&flowMainId=5894&t=1541091201&sign=93fe800e848c8f1eac57fe15e24bcd14',
        'http://trafficbank.idouzi.com/api/details?id=5bdb2f66d657fe40586d2d13&flowMainId=5894&t=1541091191&sign=42ae90c0ad3e9b93ccf1e65800f62455',
    ],
    //9_646 6141
    [
        'http://trafficbank.idouzi.com/api/details?id=5bdaef23d657fe33ad5d3213&flowMainId=6141&t=1541091234&sign=8f7fc1073730b86875bd1cda6716038a',
        'http://trafficbank.idouzi.com/api/details?id=5bdaef10d657fe2a0c7228c3&flowMainId=6141&t=1541091243&sign=6c3566a5473911ee3097e9e537db6378',
    ],
    //10_649 6496
    [
        'http://trafficbank.idouzi.com/api/details?id=5bdb2630d657fe1d6a1c0fd3&flowMainId=6496&t=1541091273&sign=352c362c0db4f1360744efbabb619046',
        'http://trafficbank.idouzi.com/api/details?id=5bdb2cdfd657fe77821f58f3&flowMainId=6496&t=1541091290&sign=f780aafc69cf39d2c1701862e44a37a2',
    ],
];

module.exports =  links;