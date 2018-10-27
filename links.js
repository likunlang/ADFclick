const links = [
    //1 176*** 1125
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd26a31d657fe0f0958c1a3&flowMainId=1125&t=1540522738&sign=b7670adae4193ad85d32773150d408c8',
        'http://trafficbank.idouzi.com/api/details?id=5bd26a36d657fe2ca708ca33&flowMainId=1125&t=1540522727&sign=b3702ecc9b466a8ae85418da708d157d',
        'http://trafficbank.idouzi.com/api/details?id=5bd26a21d657fe40a82bab93&flowMainId=1125&t=1540522886&sign=b5a66c7dc9e2f714ac41167b9045fe0b',
    ],
    //2 138*** 5188
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd0674ad657fe566246aed3&flowMainId=5188&t=1540389543&sign=70bb273f0b37406d10b22156e3fd04c7',
        'http://trafficbank.idouzi.com/api/details?id=5bd06754d657fe75ed70e083&flowMainId=5188&t=1540389516&sign=5a06872a80ba7610a3047589eda81782',
        'http://trafficbank.idouzi.com/api/details?id=5bd0674fd657fe66cc602083&flowMainId=5188&t=1540389533&sign=e086f6fd1faf0a68ce03616fabd6aa1f',
    ],
    //B1 5207
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd27f0bd657fe3ef37d5ae3&flowMainId=5207&t=1540522791&sign=4b128995368709a7eb01a5ce8c1c1a42',
        'http://trafficbank.idouzi.com/api/details?id=5bd27f0dd657fe4ddb20bce3&flowMainId=5207&t=1540522785&sign=a7340e6adba230f70edb1c75ae8ea7ba',
        'http://trafficbank.idouzi.com/api/details?id=5bd27f11d657fe5d7e5514a3&flowMainId=5207&t=1540522776&sign=c4f3a4ba9b6bd97bd9426bf7cfab6f27',
    ],
    //B2 5286
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd0673bd657fe23b8248a93&flowMainId=5286&t=1540389666&sign=665d745d9374316b310e03a2bbad3b59',
        'http://trafficbank.idouzi.com/api/details?id=5bd06740d657fe35a32e82a3&flowMainId=5286&t=1540389656&sign=2f5effa95ce00ea97bc30658d345be31',
        'http://trafficbank.idouzi.com/api/details?id=5bd06745d657fe4624746553&flowMainId=5286&t=1540389640&sign=bf7ecf4dd01572c1f6b45ffe8187362f',
    ],
    //黑 5295
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd07239d657fe637610a753&flowMainId=5295&t=1540389787&sign=de3b90c04ee973e46500c0843cb9cfdb',
        'http://trafficbank.idouzi.com/api/details?id=5bd07250d657fe04562156a3&flowMainId=5295&t=1540389774&sign=78be4b86e666b1cea13fb8964e0f59a9',
        'http://trafficbank.idouzi.com/api/details?id=5bd07259d657fe45eb52fb33&flowMainId=5295&t=1540389761&sign=182aa1a0663b668b24375a1d5036e155',
    ],
    //团 5285
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd07218d657fe7e5b40b623&flowMainId=5285&t=1540390156&sign=c442e13afd2cf09630363e789595f274',
        'http://trafficbank.idouzi.com/api/details?id=5bd07220d657fe0eed3724f3&flowMainId=5285&t=1540390140&sign=1b6d5e290fedbc653339a034dc1fc26d',
        'http://trafficbank.idouzi.com/api/details?id=5bd0722fd657fe2fc5272313&flowMainId=5285&t=1540390109&sign=70ea09baa2e8790ca8e5a25063248830',
    ],
    //1_642 5683
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd07d63d657fe30f86588e3&flowMainId=5683&t=1540390322&sign=e57084e8a588aacb8b3d9afef82a775f',
        'http://trafficbank.idouzi.com/api/details?id=5bd07d69d657fe4139141d13&flowMainId=5683&t=1540390313&sign=7b63c280945ea43b46184094df3e8e56',
        'http://trafficbank.idouzi.com/api/details?id=5bd07d6bd657fe52525758e3&flowMainId=5683&t=1540390297&sign=2f5dc3a710f753fb979db6bd630ebcc9',
    ],
    //2_648 5667
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd07dc0d657fe6e5f1bd113&flowMainId=5667&t=1540390426&sign=6b391e21a344ac36378396ecf1529e80',
        'http://trafficbank.idouzi.com/api/details?id=5bd07dc6d657fe7dcd424673&flowMainId=5667&t=1540390417&sign=4e222bf7608b4bfeb77775175e27438c',
        'http://trafficbank.idouzi.com/api/details?id=5bd07dced657fe0f0e7e6593&flowMainId=5667&t=1540390402&sign=f227b1385f23d8854723696260eb31d6',
    ],
    //3_674 5688
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd07e05d657fe486f778ca3&flowMainId=5688&t=1540390518&sign=48ceb99889699f110dbf7307bd573e8b',
        'http://trafficbank.idouzi.com/api/details?id=5bd07e0dd657fe6a04336813&flowMainId=5688&t=1540390508&sign=8b91993a1e8343dbd98d9343102a2494',
        'http://trafficbank.idouzi.com/api/details?id=5bd07e13d657fe79671c93a3&flowMainId=5688&t=1540390494&sign=759090932fc0f762bc415d562a775f80',
    ],
    //4_654 5703
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd07139d657fe11c5059ca3&flowMainId=5703&t=1540390673&sign=dacace257b58b7c0c31c968bc12e68d2',
        'http://trafficbank.idouzi.com/api/details?id=5bd0713fd657fe21f1699453&flowMainId=5703&t=1540390663&sign=3c7cfaf3ad84fb9f962e08a830b34028',
        'http://trafficbank.idouzi.com/api/details?id=5bd07150d657fe44323e7f83&flowMainId=5703&t=1540390649&sign=72e08412ef2bf24d3e3c6970693e2cfe',
    ],
    //5_664 5731
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd07f3dd657fe2cd00ebf43&flowMainId=5731&t=1540390758&sign=c466e42e76d86493f39348ef67b2db00',
        'http://trafficbank.idouzi.com/api/details?id=5bd07f46d657fe6fe51b57e3&flowMainId=5731&t=1540390749&sign=1c936c5abc5d9c456f8a319401d32b7d',
        'http://trafficbank.idouzi.com/api/details?id=5bd07f4fd657fe10675b13b3&flowMainId=5731&t=1540390737&sign=bfaa2eadfc64cb3edd5afadad8ea5bf0',
    ],
    //6_643 5765
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd07f9ad657fe0cbf7ad6f3&flowMainId=5765&t=1540390899&sign=e752ffba018880fd1cbbe1d5a4f9e2dc',
        'http://trafficbank.idouzi.com/api/details?id=5bd07facd657fe2d1f69ef23&flowMainId=5765&t=1540390890&sign=b0a2de35b75f76fb0b3213f8f3a5d860',
        'http://trafficbank.idouzi.com/api/details?id=5bd07fbdd657fe5f1345ef73&flowMainId=5765&t=1540390875&sign=7bb2474b288068c365d43578c61c9060',
    ],
    //7_647 5830
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd08036d657fe0e541e42f3&flowMainId=5830&t=1540390989&sign=238e336231656bee1ae02c35440fb76f',
        'http://trafficbank.idouzi.com/api/details?id=5bd0803fd657fe2f7672b733&flowMainId=5830&t=1540390981&sign=2c262bf27cdc9ed4f5fdfa9de4f65d95',
        'http://trafficbank.idouzi.com/api/details?id=5bd07e13d657fe79671c93a3&flowMainId=5830&t=1540390963&sign=8c61cbb8184387fc687a7bfbefba9dad',
    ],
    //8_644 5894
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd0710dd657fe6bbd7f9df3&flowMainId=5894&t=1540391068&sign=82fa95cd6d88b15d0804ef250f22dce3',
        'http://trafficbank.idouzi.com/api/details?id=5bd0711fd657fe1e2760e203&flowMainId=5894&t=1540391059&sign=aa6ffcf2afa104a2fe80ca1063460b58',
        'http://trafficbank.idouzi.com/api/details?id=5bd07127d657fe507c4db233&flowMainId=5894&t=1540391048&sign=9bdf16a74d5b2aacdea1913e0b9aafcd',
    ],
    //9_646 6141
    [
        'http://trafficbank.idouzi.com/api/details?id=5bd09f90d657fe0c5d6524c3&flowMainId=6141&t=1540400367&sign=95c7645c202df201e565d3ae7d59ce53',
        'http://trafficbank.idouzi.com/api/details?id=5bd09f9bd657fe1be8142073&flowMainId=6141&t=1540400358&sign=237ea58f9e8431fd2f7e2fea753f265d',
        'http://trafficbank.idouzi.com/api/details?id=5bd09fa1d657fe3d9076d0e3&flowMainId=6141&t=1540400349&sign=6b79cfe1e6f0354a17471816a70593c6',
    ],
];

module.exports =  links;