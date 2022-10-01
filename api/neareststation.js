

const express = require("express");
const router = express.Router();
//const fetch = require("node-fetch");
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));


const all_station_data = {
    "fob": [
        {
            "station_code": "DDSC",
            "latNum": 28.58938,
            "longNum": 77.1673313
        },
        {
            "station_code": "DKV",
            "latNum": 28.5921119,
            "longNum": 77.1615398
        }
    ],
    "blue_line": [
        {
            "station_code": "YB",
            "latNum": 28.6233,
            "longNum": 77.2679
        },
        {
            "station_code": "LN",
            "latNum": 28.6305,
            "longNum": 77.2773
        },
        {
            "station_code": "NV",
            "latNum": 28.6366,
            "longNum": 77.2868
        },
        {
            "station_code": "PTVR",
            "latNum": 28.6419,
            "longNum": 77.2956
        },
        {
            "station_code": "KKDA",
            "latNum": 28.6485,
            "longNum": 77.3056
        },
        {
            "station_code": "AVIT",
            "latNum": 28.647,
            "longNum": 77.3159
        },
        {
            "station_code": "KSHI",
            "latNum": 28.6455,
            "longNum": 77.3244
        },
        {
            "station_code": "VASI",
            "latNum": 28.6498,
            "longNum": 77.3397
        }
    ],
    "grey_line": [
        {
            "station_code": "DW",
            "latNum": 28.6149,
            "longNum": 77.0227
        },
        {
            "station_code": "NNGI",
            "latNum": 28.6174019,
            "longNum": 77.0083739
        },
        {
            "station_code": "NFGH",
            "latNum": 28.6126772,
            "longNum": 76.984354
        },
        {
            "station_code": "DNBT",
            "latNum": 28.6118577,
            "longNum": 76.9754261
        }
    ],
    "orange_line": [
        {
            "station_code": "NDI",
            "latNum": 28.6427,
            "longNum": 77.2199
        },
        {
            "station_code": "SJSU",
            "latNum": 28.6287699,
            "longNum": 77.2114121
        },
        {
            "station_code": "DKV",
            "latNum": 28.5921119,
            "longNum": 77.1615398
        },
        {
            "station_code": "DACY",
            "latNum": 28.548032,
            "longNum": 77.1182363
        },
        {
            "station_code": "APOT",
            "latNum": 28.5573141,
            "longNum": 77.0869171
        },
        {
            "station_code": "DSTO",
            "latNum": 28.5522,
            "longNum": 77.0583
        }
    ],
    "rmgl": [
        {
            "station_code": "S55",
            "latNum": 28.4234,
            "longNum": 77.1052
        },
        {
            "station_code": "AIT",
            "latNum": 28.431,
            "longNum": 77.1028
        },
        {
            "station_code": "S53",
            "latNum": 28.4464,
            "longNum": 77.0982
        },
        {
            "station_code": "SUL",
            "latNum": 28.4574,
            "longNum": 77.0947
        },
        {
            "station_code": "PH1",
            "latNum": 28.4706,
            "longNum": 77.0932
        },
        {
            "station_code": "SKRP",
            "latNum": 28.4813,
            "longNum": 77.0931
        },
        {
            "station_code": "DL2",
            "latNum": 28.4873,
            "longNum": 77.0931
        },
        {
            "station_code": "BEL",
            "latNum": 28.4923,
            "longNum": 77.0884
        },
        {
            "station_code": "GAT",
            "latNum": 28.4977,
            "longNum": 77.0894
        },
        {
            "station_code": "MAL",
            "latNum": 28.4997,
            "longNum": 77.0939
        },
        {
            "station_code": "DL3",
            "latNum": 28.4925,
            "longNum": 77.0919
        }
    ],
    "green_line": [
        {
            "station_code": "KNR",
            "latNum": 28.6557,
            "longNum": 77.1508
        },
        {
            "station_code": "SRSM",
            "latNum": 28.66213,
            "longNum": 77.1554713
        },
        {
            "station_code": "ILOK",
            "latNum": 28.6736,
            "longNum": 77.1703
        },
        {
            "station_code": "APMN",
            "latNum": 28.6715791,
            "longNum": 77.1552039
        },
        {
            "station_code": "PBGA",
            "latNum": 28.6729291,
            "longNum": 77.1438705
        },
        {
            "station_code": "PBGW",
            "latNum": 28.6727751,
            "longNum": 77.136418
        },
        {
            "station_code": "SHVP",
            "latNum": 28.674939,
            "longNum": 77.1283933
        },
        {
            "station_code": "MAPR",
            "latNum": 28.67634,
            "longNum": 77.1175513
        },
        {
            "station_code": "PVE",
            "latNum": 28.6773312,
            "longNum": 77.1101289
        },
        {
            "station_code": "PVW",
            "latNum": 28.678829,
            "longNum": 77.0994732
        },
        {
            "station_code": "PAGI",
            "latNum": 28.6798828,
            "longNum": 77.0910404
        },
        {
            "station_code": "UNRG",
            "latNum": 28.6810606,
            "longNum": 77.0787957
        },
        {
            "station_code": "SMSM",
            "latNum": 28.68182,
            "longNum": 77.0717713
        },
        {
            "station_code": "NNOI",
            "latNum": 28.681984,
            "longNum": 77.0616903
        },
        {
            "station_code": "NRSN",
            "latNum": 28.682133,
            "longNum": 77.0540313
        },
        {
            "station_code": "RDPK",
            "latNum": 28.6822794,
            "longNum": 77.0418183
        },
        {
            "station_code": "MUDK",
            "latNum": 28.68239,
            "longNum": 77.0281513
        },
        {
            "station_code": "MIAA",
            "latNum": 28.6822749,
            "longNum": 77.0146522
        },
        {
            "station_code": "GHEM",
            "latNum": 28.6853835,
            "longNum": 76.9949917
        },
        {
            "station_code": "TKLM",
            "latNum": 28.68688,
            "longNum": 76.9750813
        },
        {
            "station_code": "TKBR",
            "latNum": 28.688233,
            "longNum": 76.9620993
        },
        {
            "station_code": "MIEE",
            "latNum": 28.6892418,
            "longNum": 76.9489583
        },
        {
            "station_code": "BUSS",
            "latNum": 28.6906885,
            "longNum": 76.9352146
        },
        {
            "station_code": "CIPK",
            "latNum": 28.6973662,
            "longNum": 76.9187353
        }
    ],
    "yellow_line": [
        {
            "station_code": "SPBI",
            "latNum": 28.7446,
            "longNum": 77.1383
        },
        {
            "station_code": "RISE",
            "latNum": 28.7327,
            "longNum": 77.1341
        },
        {
            "station_code": "BIMR",
            "latNum": 28.73,
            "longNum": 77.1492
        },
        {
            "station_code": "JGPI",
            "latNum": 28.7296,
            "longNum": 77.1666
        },
        {
            "station_code": "AHNR",
            "latNum": 28.7144,
            "longNum": 77.1669
        },
        {
            "station_code": "AZU",
            "latNum": 28.707,
            "longNum": 77.1807
        },
        {
            "station_code": "MDTW",
            "latNum": 28.7029,
            "longNum": 77.1937
        },
        {
            "station_code": "GTBR",
            "latNum": 28.6984,
            "longNum": 77.2059
        },
        {
            "station_code": "VW",
            "latNum": 28.6952,
            "longNum": 77.2145
        },
        {
            "station_code": "VS",
            "latNum": 28.6878,
            "longNum": 77.2216
        },
        {
            "station_code": "CL",
            "latNum": 28.6773,
            "longNum": 77.2248
        },
        {
            "station_code": "KG",
            "latNum": 28.6675,
            "longNum": 77.2282
        },
        {
            "station_code": "CHK",
            "latNum": 28.6588,
            "longNum": 77.2304
        },
        {
            "station_code": "CWBR",
            "latNum": 28.6488,
            "longNum": 77.2263
        },
        {
            "station_code": "NDI",
            "latNum": 28.6427,
            "longNum": 77.2199
        },
        {
            "station_code": "RCK",
            "latNum": 28.633,
            "longNum": 77.2194
        },
        {
            "station_code": "PTCK",
            "latNum": 28.6233,
            "longNum": 77.2145
        },
        {
            "station_code": "CTST",
            "latNum": 28.6152,
            "longNum": 77.2123
        },
        {
            "station_code": "UDB",
            "latNum": 28.611,
            "longNum": 77.2122
        },
        {
            "station_code": "LKM",
            "latNum": 28.5977,
            "longNum": 77.2112
        },
        {
            "station_code": "JB",
            "latNum": 28.5859,
            "longNum": 77.2125
        },
        {
            "station_code": "INA",
            "latNum": 28.5744,
            "longNum": 77.2096
        },
        {
            "station_code": "AIIMS",
            "latNum": 28.5668,
            "longNum": 77.2081
        },
        {
            "station_code": "GNPK",
            "latNum": 28.5598,
            "longNum": 77.2068
        },
        {
            "station_code": "HKS",
            "latNum": 28.544,
            "longNum": 77.2062
        },
        {
            "station_code": "MVNR",
            "latNum": 28.529,
            "longNum": 77.205
        },
        {
            "station_code": "SAKT",
            "latNum": 28.5211,
            "longNum": 77.2022
        },
        {
            "station_code": "QM",
            "latNum": 28.5129,
            "longNum": 77.1863
        },
        {
            "station_code": "CHTP",
            "latNum": 28.5068,
            "longNum": 77.175
        },
        {
            "station_code": "SLTP",
            "latNum": 28.4991,
            "longNum": 77.1612
        },
        {
            "station_code": "GTNI",
            "latNum": 28.4938,
            "longNum": 77.1492
        },
        {
            "station_code": "AJG",
            "latNum": 28.4809,
            "longNum": 77.1259
        },
        {
            "station_code": "GE",
            "latNum": 28.4819,
            "longNum": 77.1023
        },
        {
            "station_code": "SKRP",
            "latNum": 28.4813,
            "longNum": 77.0931
        },
        {
            "station_code": "MGRO",
            "latNum": 28.4796,
            "longNum": 77.0801
        },
        {
            "station_code": "IFOC",
            "latNum": 28.4722,
            "longNum": 77.0724
        },
        {
            "station_code": "HCC",
            "latNum": 28.4592,
            "longNum": 77.0725
        }
    ],
    "red_line": [
        {
            "station_code": "NBAA",
            "latNum": 28.6705,
            "longNum": 77.4158
        },
        {
            "station_code": "HDNR",
            "latNum": 28.6734,
            "longNum": 77.4065
        },
        {
            "station_code": "ATHA",
            "latNum": 28.6729,
            "longNum": 77.3917
        },
        {
            "station_code": "MNGM",
            "latNum": 28.6785,
            "longNum": 77.3839
        },
        {
            "station_code": "SMPK",
            "latNum": 28.6782,
            "longNum": 77.3702
        },
        {
            "station_code": "RJNM",
            "latNum": 28.6776,
            "longNum": 77.3581
        },
        {
            "station_code": "RJBH",
            "latNum": 28.6808,
            "longNum": 77.3439
        },
        {
            "station_code": "SHDN",
            "latNum": 28.6766,
            "longNum": 77.3338
        },
        {
            "station_code": "DSG",
            "latNum": 28.6759,
            "longNum": 77.3215
        },
        {
            "station_code": "JLML",
            "latNum": 28.6758,
            "longNum": 77.3124
        },
        {
            "station_code": "MPK",
            "latNum": 28.6756,
            "longNum": 77.3001
        },
        {
            "station_code": "SHD",
            "latNum": 28.6735,
            "longNum": 77.2899
        },
        {
            "station_code": "WC",
            "latNum": 28.6718,
            "longNum": 77.2777
        },
        {
            "station_code": "SLAP",
            "latNum": 28.6699,
            "longNum": 77.2666
        },
        {
            "station_code": "SHPK",
            "latNum": 28.6683,
            "longNum": 77.2503
        },
        {
            "station_code": "KG",
            "latNum": 28.6675,
            "longNum": 77.2282
        },
        {
            "station_code": "TZI",
            "latNum": 28.6671,
            "longNum": 77.2165
        },
        {
            "station_code": "PBGH",
            "latNum": 28.6664,
            "longNum": 77.2074
        },
        {
            "station_code": "PRA",
            "latNum": 28.6666,
            "longNum": 77.1989
        },
        {
            "station_code": "SHT",
            "latNum": 28.6701,
            "longNum": 77.1813
        },
        {
            "station_code": "ILOK",
            "latNum": 28.6736,
            "longNum": 77.1703
        },
        {
            "station_code": "KN",
            "latNum": 28.6824,
            "longNum": 77.1648
        },
        {
            "station_code": "KP",
            "latNum": 28.6876,
            "longNum": 77.1625
        },
        {
            "station_code": "NSHP",
            "latNum": 28.696,
            "longNum": 77.1526
        },
        {
            "station_code": "KE",
            "latNum": 28.698,
            "longNum": 77.1405
        },
        {
            "station_code": "PTP",
            "latNum": 28.7031,
            "longNum": 77.1325
        },
        {
            "station_code": "RHE",
            "latNum": 28.7077,
            "longNum": 77.1259
        },
        {
            "station_code": "RHW",
            "latNum": 28.7149,
            "longNum": 77.1155
        },
        {
            "station_code": "RI",
            "latNum": 28.7208,
            "longNum": 77.1072
        }
    ],
    "magenta_line": [
        {
            "station_code": "JPW",
            "latNum": 28.6295,
            "longNum": 77.0778
        },
        {
            "station_code": "DBMR",
            "latNum": 28.6155363,
            "longNum": 77.0825158
        },
        {
            "station_code": "DSHP",
            "latNum": 28.6024422,
            "longNum": 77.0803213
        },
        {
            "station_code": "PALM",
            "latNum": 28.5889555,
            "longNum": 77.0806434
        },
        {
            "station_code": "SABR",
            "latNum": 28.5764632,
            "longNum": 77.1114814
        },
        {
            "station_code": "IGDA",
            "latNum": 28.5647538,
            "longNum": 77.1221478
        },
        {
            "station_code": "SKVR",
            "latNum": 28.5608173,
            "longNum": 77.1381563
        },
        {
            "station_code": "VTVR",
            "latNum": 28.5581039,
            "longNum": 77.1603043
        },
        {
            "station_code": "MIRK",
            "latNum": 28.5567549,
            "longNum": 77.1719806
        },
        {
            "station_code": "RKPM",
            "latNum": 28.5503497,
            "longNum": 77.1851486
        },
        {
            "station_code": "IIT",
            "latNum": 28.547199,
            "longNum": 77.1916283
        },
        {
            "station_code": "HKS",
            "latNum": 28.544,
            "longNum": 77.2062
        },
        {
            "station_code": "PSPK",
            "latNum": 28.5422964,
            "longNum": 77.2185052
        },
        {
            "station_code": "CDLI",
            "latNum": 28.5410031,
            "longNum": 77.2304831
        },
        {
            "station_code": "GKEI",
            "latNum": 28.5430994,
            "longNum": 77.2410711
        },
        {
            "station_code": "NUEE",
            "latNum": 28.5458514,
            "longNum": 77.251167
        },
        {
            "station_code": "KJMD",
            "latNum": 28.54945,
            "longNum": 77.2570313
        },
        {
            "station_code": "OKNS",
            "latNum": 28.5544365,
            "longNum": 77.2648578
        },
        {
            "station_code": "IWNR",
            "latNum": 28.5596435,
            "longNum": 77.2733625
        },
        {
            "station_code": "JANR",
            "latNum": 28.5627144,
            "longNum": 77.2857862
        },
        {
            "station_code": "OVA",
            "latNum": 28.5614626,
            "longNum": 77.2919823
        },
        {
            "station_code": "JLA8",
            "latNum": 28.5462285,
            "longNum": 77.2943212
        },
        {
            "station_code": "KIKJ",
            "latNum": 28.543,
            "longNum": 77.30968
        },
        {
            "station_code": "OKBS",
            "latNum": 28.5530441,
            "longNum": 77.3201621
        },
        {
            "station_code": "BCGN",
            "latNum": 28.564,
            "longNum": 77.3343
        }
    ],
    "violet_line": [
        {
            "station_code": "KG",
            "latNum": 28.6675,
            "longNum": 77.2282
        },
        {
            "station_code": "LLQA",
            "latNum": 28.6577564,
            "longNum": 77.2347368
        },
        {
            "station_code": "JAMD",
            "latNum": 28.6504603,
            "longNum": 77.2362374
        },
        {
            "station_code": "DLIG",
            "latNum": 28.640061,
            "longNum": 77.2386843
        },
        {
            "station_code": "ITO",
            "latNum": 28.6278305,
            "longNum": 77.240214
        },
        {
            "station_code": "MDHS",
            "latNum": 28.6259,
            "longNum": 77.2343
        },
        {
            "station_code": "JNPH",
            "latNum": 28.625061,
            "longNum": 77.2169953
        },
        {
            "station_code": "CTST",
            "latNum": 28.6152,
            "longNum": 77.2123
        },
        {
            "station_code": "KM",
            "latNum": 28.6009531,
            "longNum": 77.2252085
        },
        {
            "station_code": "JLNS",
            "latNum": 28.587146,
            "longNum": 77.2310163
        },
        {
            "station_code": "JGPA",
            "latNum": 28.583698,
            "longNum": 77.2362473
        },
        {
            "station_code": "LJPN",
            "latNum": 28.5706249,
            "longNum": 77.2342561
        },
        {
            "station_code": "MLCD",
            "latNum": 28.5647817,
            "longNum": 77.2309781
        },
        {
            "station_code": "KHCY",
            "latNum": 28.55554,
            "longNum": 77.2394585
        },
        {
            "station_code": "NP",
            "latNum": 28.5514171,
            "longNum": 77.2506607
        },
        {
            "station_code": "KJMD",
            "latNum": 28.54945,
            "longNum": 77.2570313
        },
        {
            "station_code": "GDPI",
            "latNum": 28.5446117,
            "longNum": 77.261992
        },
        {
            "station_code": "HNOK",
            "latNum": 28.5429658,
            "longNum": 77.273094
        },
        {
            "station_code": "JLA",
            "latNum": 28.5382066,
            "longNum": 77.2811108
        },
        {
            "station_code": "STVR",
            "latNum": 28.5294337,
            "longNum": 77.2861724
        },
        {
            "station_code": "METE",
            "latNum": 28.514454,
            "longNum": 77.2902056
        },
        {
            "station_code": "TKDS",
            "latNum": 28.5031672,
            "longNum": 77.2963205
        },
        {
            "station_code": "BAPB",
            "latNum": 28.49325,
            "longNum": 77.3007813
        },
        {
            "station_code": "SRAI",
            "latNum": 28.4780481,
            "longNum": 77.3028175
        },
        {
            "station_code": "NHPC",
            "latNum": 28.4576694,
            "longNum": 77.3047513
        },
        {
            "station_code": "MMJR",
            "latNum": 28.4484907,
            "longNum": 77.3054333
        },
        {
            "station_code": "STTA",
            "latNum": 28.43838,
            "longNum": 77.3067493
        },
        {
            "station_code": "BKMR",
            "latNum": 28.4228115,
            "longNum": 77.3079462
        },
        {
            "station_code": "OFDB",
            "latNum": 28.4102041,
            "longNum": 77.3086392
        },
        {
            "station_code": "NCAJ",
            "latNum": 28.3976537,
            "longNum": 77.3101607
        },
        {
            "station_code": "BACH",
            "latNum": 28.385109,
            "longNum": 77.3113603
        },
        {
            "station_code": "ECMJ",
            "latNum": 28.37016,
            "longNum": 77.31494
        },
        {
            "station_code": "NCBC",
            "latNum": 28.354673,
            "longNum": 77.3140293
        },
        {
            "station_code": "BVHM",
            "latNum": 28.3397812,
            "longNum": 77.316603
        }
    ],
    "blue_line1": [
        {
            "station_code": "DSTO",
            "latNum": 28.5522,
            "longNum": 77.0583
        },
        {
            "station_code": "DSET",
            "latNum": 28.5657,
            "longNum": 77.0671
        },
        {
            "station_code": "DSN",
            "latNum": 28.5743,
            "longNum": 77.0653
        },
        {
            "station_code": "DST",
            "latNum": 28.5811,
            "longNum": 77.0575
        },
        {
            "station_code": "DSE",
            "latNum": 28.5864,
            "longNum": 77.0497
        },
        {
            "station_code": "DSW",
            "latNum": 28.5955,
            "longNum": 77.0417
        },
        {
            "station_code": "DSTN",
            "latNum": 28.5972,
            "longNum": 77.0333
        },
        {
            "station_code": "DSFN",
            "latNum": 28.6022,
            "longNum": 77.0259
        },
        {
            "station_code": "DW",
            "latNum": 28.6149,
            "longNum": 77.0227
        },
        {
            "station_code": "DM",
            "latNum": 28.6218,
            "longNum": 77.0411
        },
        {
            "station_code": "NWD",
            "latNum": 28.6202,
            "longNum": 77.045
        },
        {
            "station_code": "UNW",
            "latNum": 28.6218,
            "longNum": 77.0558
        },
        {
            "station_code": "UNE",
            "latNum": 28.6248,
            "longNum": 77.0653
        },
        {
            "station_code": "JPW",
            "latNum": 28.6295,
            "longNum": 77.0778
        },
        {
            "station_code": "JPE",
            "latNum": 28.6328,
            "longNum": 77.0862
        },
        {
            "station_code": "TN",
            "latNum": 28.6366,
            "longNum": 77.0965
        },
        {
            "station_code": "SN",
            "latNum": 28.6404,
            "longNum": 77.1049
        },
        {
            "station_code": "TG",
            "latNum": 28.6438,
            "longNum": 77.1129
        },
        {
            "station_code": "RG",
            "latNum": 28.649,
            "longNum": 77.1227
        },
        {
            "station_code": "RN",
            "latNum": 28.6527,
            "longNum": 77.1315
        },
        {
            "station_code": "MN",
            "latNum": 28.6579,
            "longNum": 77.1427
        },
        {
            "station_code": "KNR",
            "latNum": 28.6557,
            "longNum": 77.1508
        },
        {
            "station_code": "SP",
            "latNum": 28.6516,
            "longNum": 77.1582
        },
        {
            "station_code": "PN",
            "latNum": 28.645,
            "longNum": 77.1693
        },
        {
            "station_code": "RP",
            "latNum": 28.6425,
            "longNum": 77.1782
        },
        {
            "station_code": "KB",
            "latNum": 28.644,
            "longNum": 77.1885
        },
        {
            "station_code": "JW",
            "latNum": 28.6443,
            "longNum": 77.1999
        },
        {
            "station_code": "RKAM",
            "latNum": 28.6392,
            "longNum": 77.2086
        },
        {
            "station_code": "RCK",
            "latNum": 28.633,
            "longNum": 77.2194
        },
        {
            "station_code": "BRKR",
            "latNum": 28.6299,
            "longNum": 77.2245
        },
        {
            "station_code": "MDHS",
            "latNum": 28.6259,
            "longNum": 77.2343
        },
        {
            "station_code": "PTMD",
            "latNum": 28.6233,
            "longNum": 77.2427
        },
        {
            "station_code": "IDPT",
            "latNum": 28.6206,
            "longNum": 77.25
        },
        {
            "station_code": "YB",
            "latNum": 28.6233,
            "longNum": 77.2679
        },
        {
            "station_code": "ASDM",
            "latNum": 28.618,
            "longNum": 77.2794
        },
        {
            "station_code": "MVP1",
            "latNum": 28.6042,
            "longNum": 77.2896
        },
        {
            "station_code": "MVE",
            "latNum": 28.5928,
            "longNum": 77.2947
        },
        {
            "station_code": "NAGR",
            "latNum": 28.5892,
            "longNum": 77.3021
        },
        {
            "station_code": "NSFT",
            "latNum": 28.5851,
            "longNum": 77.3116
        },
        {
            "station_code": "NSST",
            "latNum": 28.5787,
            "longNum": 77.3174
        },
        {
            "station_code": "NSET",
            "latNum": 28.5708,
            "longNum": 77.3262
        },
        {
            "station_code": "BCGN",
            "latNum": 28.564,
            "longNum": 77.3343
        },
        {
            "station_code": "GEC",
            "latNum": 28.5672,
            "longNum": 77.346
        },
        {
            "station_code": "NCC",
            "latNum": 28.5747,
            "longNum": 77.356
        },
        {
            "station_code": "STFN",
            "latNum": 28.5801,
            "longNum": 77.3635
        },
        {
            "station_code": "SFTN",
            "latNum": 28.5867,
            "longNum": 77.3728
        },
        {
            "station_code": "SSON",
            "latNum": 28.5976,
            "longNum": 77.3701
        },
        {
            "station_code": "SFNN",
            "latNum": 28.6064,
            "longNum": 77.3731
        },
        {
            "station_code": "SSTN",
            "latNum": 28.617,
            "longNum": 77.3736
        },
        {
            "station_code": "NECC",
            "latNum": 28.6279,
            "longNum": 77.3749
        }
    ],
    "pink_line": [
        {
            "station_code": "MKPR",
            "latNum": 28.724167,
            "longNum": 77.1805273
        },
        {
            "station_code": "AZU",
            "latNum": 28.707,
            "longNum": 77.1807
        },
        {
            "station_code": "SMBG",
            "latNum": 28.702018,
            "longNum": 77.1625815
        },
        {
            "station_code": "NSHP",
            "latNum": 28.696,
            "longNum": 77.1526
        },
        {
            "station_code": "SAKP",
            "latNum": 28.6857703,
            "longNum": 77.1474327
        },
        {
            "station_code": "PBGW",
            "latNum": 28.6727751,
            "longNum": 77.136418
        },
        {
            "station_code": "ESIH",
            "latNum": 28.6582712,
            "longNum": 77.1252019
        },
        {
            "station_code": "RG",
            "latNum": 28.649,
            "longNum": 77.1227
        },
        {
            "station_code": "MYPI",
            "latNum": 28.637099,
            "longNum": 77.1275523
        },
        {
            "station_code": "NAVR",
            "latNum": 28.624125,
            "longNum": 77.1342993
        },
        {
            "station_code": "DLIC",
            "latNum": 28.6086915,
            "longNum": 77.1382338
        },
        {
            "station_code": "DDSC",
            "latNum": 28.58938,
            "longNum": 77.1673313
        },
        {
            "station_code": "SVMB",
            "latNum": 28.578504,
            "longNum": 77.1735373
        },
        {
            "station_code": "BKCP",
            "latNum": 28.5703764,
            "longNum": 77.1843847
        },
        {
            "station_code": "SOJI",
            "latNum": 28.5757221,
            "longNum": 77.1955806
        },
        {
            "station_code": "INA",
            "latNum": 28.5744,
            "longNum": 77.2096
        },
        {
            "station_code": "SOEN",
            "latNum": 28.5686386,
            "longNum": 77.2180074
        },
        {
            "station_code": "LJPN",
            "latNum": 28.5706249,
            "longNum": 77.2342561
        },
        {
            "station_code": "VNPR",
            "latNum": 28.5655297,
            "longNum": 77.2485991
        },
        {
            "station_code": "AHRM",
            "latNum": 28.5727649,
            "longNum": 77.258494
        },
        {
            "station_code": "NIZM",
            "latNum": 28.58936,
            "longNum": 77.2549413
        },
        {
            "station_code": "MVP1",
            "latNum": 28.6042,
            "longNum": 77.2896
        },
        {
            "station_code": "MVPO",
            "latNum": 28.6057944,
            "longNum": 77.2965148
        },
        {
            "station_code": "TKPR",
            "latNum": 28.6134317,
            "longNum": 77.3077957
        },
        {
            "station_code": "VENT",
            "latNum": 28.620363,
            "longNum": 77.3023292
        },
        {
            "station_code": "VNNR",
            "latNum": 28.624877,
            "longNum": 77.3021833
        },
        {
            "station_code": "IPE",
            "latNum": 28.6319356,
            "longNum": 77.3085679
        },
        {
            "station_code": "AVIT",
            "latNum": 28.647,
            "longNum": 77.3159
        },
        {
            "station_code": "KKDA",
            "latNum": 28.6485,
            "longNum": 77.3056
        },
        {
            "station_code": "KKDC",
            "latNum": 28.6450398,
            "longNum": 77.3042615
        },
        {
            "station_code": "KHNA",
            "latNum": 28.6575316,
            "longNum": 77.2885172
        },
        {
            "station_code": "EANR",
            "latNum": 28.66479,
            "longNum": 77.2826113
        },
        {
            "station_code": "WC",
            "latNum": 28.6718,
            "longNum": 77.2777
        },
        {
            "station_code": "JFRB",
            "latNum": 28.6827585,
            "longNum": 77.2725587
        },
        {
            "station_code": "MUPR",
            "latNum": 28.6921031,
            "longNum": 77.2774233
        },
        {
            "station_code": "GKPR",
            "latNum": 28.7025224,
            "longNum": 77.2861548
        },
        {
            "station_code": "JIEE",
            "latNum": 28.714627,
            "longNum": 77.2866533
        },
        {
            "station_code": "SVVR",
            "latNum": 28.7215468,
            "longNum": 77.2883255
        }
    ]
  }
  //async function
  async function getStationCodes(line) {
    //get delhi metro stations
    const response = await fetch(`https://backend.delhimetrorail.com/api/v2/en/station_by_line/${line}`);
    const data = await response.json();
    //station_code
    const station_code = data.map((station) => station.station_code);
    return station_code;
  }
  /*app.get('/station-codes', async function (req, res) {
    const stations = await getStationCodes();
    res.status(200).send(stations);
  });*/
  //shortest distance by lat long
  function distance(lat1, lon1, lat2, lon2) {
    var p = 0.017453292519943295; // Math.PI / 180
    var c = Math.cos;
    var a = 0.5 - c((lat2 - lat1) * p) / 2 +
      c(lat1 * p) * c(lat2 * p) *
      (1 - c((lon2 - lon1) * p)) / 2;
    return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
  }
  //async function
  //iterate through station codes
  async function misc() {
    //get line_list
    //https://backend.delhimetrorail.com/api/v2/en/line_list
    const response = await fetch('https://backend.delhimetrorail.com/api/v2/en/line_list');
    const data = await response.json();
    //iterate through line_list and get station_codes
    const dataX = {
  
    }
    const station_codes = await Promise.all(data.map(async (line) => {
      const station_code = await getStationCodes(line.line_code);
      const station_data = station_code.map(async (station_code) => {
        const response = await fetch(`https://backend.delhimetrorail.com/api/v2/en/station/${station_code}`);
        const data = await response.json();
        //get lat long
        const lat = data.latitude;
        const long = data.longitude;
        //convert to number
        
        //get distance
        //const dist = distance(input_lat, input_long, lat, long);
        return {
          station_code,
          lat,
          long
        };
        
      });
      const station = await Promise.all(station_data);
      var stationX = `${line.line_color.replace(" ","_")}`.toLowerCase();
      //check if stationX exists, if yes append a number to it
      if (dataX[stationX]) {
        let i = 1;
        while (dataX[stationX]) {
          stationX = `${line.line_color.replace(" ","_")}`.toLowerCase() + i;
          i++;
        }
      }
      dataX[stationX] = station;
    }));
    return dataX;
  
    //get nearest station
    
    
  }
  /*app.get('/misc', async function (req, res) {
    const stations = await misc();
    res.status(200).send(stations);
  });*/
  
  async function getNearestStation(input_lat, input_long, line) {
    
  const station_data = all_station_data[line]
  //iterate through the array
  var distObj = {};
  for (var i = 0; i < station_data.length; i++) {
    //get lat and long
    var lat = station_data[i].latNum;
    var long = station_data[i].longNum;
    //convert to float
    lat = parseFloat(lat);
    long = parseFloat(long);
  
  
    //calculate distance
    var dist = distance(lat, long, input_lat, input_long);
    //add to object
    distObj[station_data[i].station_code] = dist;
  }
  //sort the object
  var sorted = Object.keys(distObj).sort(function(a,b){return distObj[a]-distObj[b]});
  
    // return the station code
  return sorted[0];
  }
  function toIsoString(date) {
    var tzo = -date.getTimezoneOffset(),
        dif = tzo >= 0 ? '+' : '-',
        pad = function(num) {
            return (num < 10 ? '0' : '') + num;
        };
  
    return date.getFullYear() +
        '-' + pad(date.getMonth() + 1) +
        '-' + pad(date.getDate()) +
        'T' + pad(date.getHours()) +
        ':' + pad(date.getMinutes()) +
        ':' + pad(date.getSeconds()) 
  }
  
  async function nearest_station (req, res) {
      const input_lat = req.query.lat;
      const input_long = req.query.long;
      const line = req.query.line;
      //optional time parameter
      const time = req.query.time;
      //if time is not provided, use current time (GMT +5:30)
      var time_to_use = time ? time : new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"});
      
      time_to_use = toIsoString(new Date(time_to_use));
    
      
      //remove Z from time
      time_to_use = time_to_use.replace('Z', '');
      const nearest_station = await getNearestStation(input_lat, input_long, line);
      //get station details
    
      const response = await fetch(`https://backend.delhimetrorail.com/api/v2/en/station/${nearest_station}`);
      
      const data = await response.json();
      dataX = {
        "station_code": data.station_code,
        "station_name": data.station_name,
        "latitude": data.latitude,
        "longitude": data.longitude,
        "platforms": data.platforms,
        "time": time_to_use
      }
      //get least-distance response
      //Sample: https://backend.delhimetrorail.com/api/v2/en/station_route/NECC/BCGN/least-distance/2022-10-02T19:55:22.182Z
      const metro_lines = data.metro_lines;
      var platforms = data.platforms;
      /*
      "metro_lines": [
        {
            "id": 3,
            "name": "Line 3",
            "line_color": "Blue Line",
            "line_code": "LN3",
            "primary_color_code": "#3b76c0",
            "secondary_color_code": "#edf5ff",
            "class_primary": "blue",
            "class_secondary": null,
            "start_station": "DWARKA SECTOR - 21",
            "end_station": "NOIDA ELECTRONIC CITY",
            "status": "Normal Service"
        }
    ]
      */
     //platforms -> platform.train_towards.station_name

     //find metro line for every platform
     platforms = platforms.map((platform) => {
        const station_name = platform.train_towards.station_name;
        //match station_name with metro_lines
        var lineX = {}
        metro_lines.forEach((line) => {
            const start_station = line.start_station;
            const end_station = line.end_station;
            if (station_name === start_station || station_name === end_station) {
                lineX = line;
                //end loop
                return;
            }
         });
        platform.line = lineX;
        return platform;
    });
    console.log(platforms);
     
     

      const platform_data = platforms.map(async (platform) => {
        const dest = platform.train_towards.station_code;
        //check if nearest_station is not the destination
        if (nearest_station !== dest) {
          const url = `https://backend.delhimetrorail.com/api/v2/en/station_route/${nearest_station}/${dest}/least-distance/${time_to_use}`;
    
          const response = await fetch(url);
          const data = await response.json();
          const start_time = data.route[0].new_start_time;
          //sample: 21:37:34
          //convert to 12 hour format
          const start_time_12hr = new Date(
            `2020-01-01T${start_time}`
          ).toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          });
          const newPlatform = platform;
          newPlatform.start_time = start_time_12hr;
    
          return newPlatform;
        }
      });
      const platform_data_all = await Promise.all(platform_data);
      dataX.platforms = platform_data_all;
      res.status(200).send(dataX);
      
    }
    router.get('/', nearest_station);
    module.exports = router;