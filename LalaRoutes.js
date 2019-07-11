"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = {
    //IDs the name, latitude, and longitude of each Bus Stop
    "stops": [
        { "name": "Main Gate", "lat": 37.08054333333334, "lon": 127.04833 },
        { "name": "Commissary", "lat": 37.07875444444445, "lon": 127.04181222222223 },
        { "name": "Bldg 474 (SNCO Dorms)", "lat": 37.083195555555555, "lon": 127.04271555555556 },
        { "name": "Bldg 383 (SFS Dorms)", "lat": 37.08466777777778, "lon": 127.04041555555558 },
        { "name": "Bldg 667 (CE Customer Service)", "lat": 37.08597, "lon": 127.03798000000003 },
        { "name": "Passenger Terminal", "lat": 37.08686222222222, "lon": 127.03648333333336 },
        { "name": "DBIDS", "lat": 37.08249333333334, "lon": 127.03905222222222 },
        { "name": "Bldg 936 (MPF/7AF)", "lat": 37.08144333333333, "lon": 127.03573111111112 },
        { "name": "BX", "lat": 37.08386375, "lon": 127.03390250000001 },
        { "name": "IPE", "lat": 37.08489, "lon": 127.03301999999998 },
        { "name": "Commando Warrior ECP", "lat": 37.08593625, "lon": 127.02627625000001 },
        { "name": "Bldg 1601 ECP (Golf Course)", "lat": 37.082617, "lon": 127.02308299999997 },
        { "name": "Mustang Center", "lat": 37.08081000000001, "lon": 127.02802666666668 }
    ]
    //IDs the name, latitude, and longitude of each transfer identifier on the Blue line (aka lines that transfer down the list)
    //Still require to fix lat and long data points to the point that can differenciate the Blue Bus from the Orange Bus
    "transfersDown": [
        { "name": "Main Gate TD", "lat": 37.08054333333334, "lon": 127.04833 },
        { "name": "Commissary TD", "lat": 37.07875444444445, "lon": 127.04181222222223 },
        { "name": "Bldg 474 (SNCO Dorms) TD", "lat": 37.083195555555555, "lon": 127.04271555555556 },
        { "name": "Bldg 383 (SFS Dorms) TD", "lat": 37.08466777777778, "lon": 127.04041555555558 },
        { "name": "Bldg 667 (CE Customer Service) TD", "lat": 37.08597, "lon": 127.03798000000003 },
        { "name": "Passenger Terminal TD", "lat": 37.08686222222222, "lon": 127.03648333333336 },
        { "name": "DBIDS TD", "lat": 37.08249333333334, "lon": 127.03905222222222 },
        { "name": "Bldg 936 (MPF/7AF) TD", "lat": 37.08144333333333, "lon": 127.03573111111112 },
        { "name": "BX TD", "lat": 37.08386375, "lon": 127.03390250000001 },
        { "name": "IPE TD", "lat": 37.08489, "lon": 127.03301999999998 },
        { "name": "Commando Warrior ECP TD", "lat": 37.08593625, "lon": 127.02627625000001 },
        { "name": "Bldg 1601 ECP (Golf Course) TD", "lat": 37.082617, "lon": 127.02308299999997 },
        { "name": "Mustang Center TD", "lat": 37.08081000000001, "lon": 127.02802666666668 }
    ]
    //IDs the name, latitude, and longitude of each transfer identifier on the Orange line (aka lines that transfer up the list)
    //Still require to fix lat and long data points to the point that can differenciate the Orange Bus from the Blue Bus
    "transfersUp": [
        { "name": "Main Gate TU", "lat": 37.08054333333334, "lon": 127.04833 },
        { "name": "Commissary TU", "lat": 37.07875444444445, "lon": 127.04181222222223 },
        { "name": "Bldg 474 (SNCO Dorms) TU", "lat": 37.083195555555555, "lon": 127.04271555555556 },
        { "name": "Bldg 383 (SFS Dorms) TU", "lat": 37.08466777777778, "lon": 127.04041555555558 },
        { "name": "Bldg 667 (CE Customer Service) TU", "lat": 37.08597, "lon": 127.03798000000003 },
        { "name": "Passenger Terminal TU", "lat": 37.08686222222222, "lon": 127.03648333333336 },
        { "name": "DBIDS TU", "lat": 37.08249333333334, "lon": 127.03905222222222 },
        { "name": "Bldg 936 (MPF/7AF) TU", "lat": 37.08144333333333, "lon": 127.03573111111112 },
        { "name": "BX TU", "lat": 37.08386375, "lon": 127.03390250000001 },
        { "name": "IPE TU", "lat": 37.08489, "lon": 127.03301999999998 },
        { "name": "Commando Warrior ECP TU", "lat": 37.08593625, "lon": 127.02627625000001 },
        { "name": "Bldg 1601 ECP (Golf Course) TU", "lat": 37.082617, "lon": 127.02308299999997 },
        { "name": "Mustang Center TU", "lat": 37.08081000000001, "lon": 127.02802666666668 }
    ]
};