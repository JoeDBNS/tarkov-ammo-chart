// References:
// - https://kokarn.github.io/tarkov-tools/
// - https://docs.google.com/spreadsheets/d/1VuxGkweKB118mF1kcBmVPe-Bj_gSKGOCWyoytM4miDU/htmlview?pru=AAABcqZtUvI*1Y3DUwDoIwg_fvDEoPHC3A#gid=64053005



// OnLoad Run
window.addEventListener('load', function() {
    InitNavigationMenu();
});


// Vue
var MainVue = new Vue({
	el: '#app-main',
	data: {
		session: {
			date: GetDateValues(),
			urlHostname: window.location.hostname
        },
        ammo_calibers: [
            '12 Gauge Shot',
            '12 Gauge Slugs',
            '20 Gauge',
            '9x18mm',
            '7.62x25mm',
            '9x19mm',
            '.45',
            '9x21mm',
            '5.7x28 mm',
            '4.6x30 mm',
            '9x39mm',
            '.366',
            '5.45x39 mm',
            '5.56x45 mm',
            '7.62x39 mm',
            '7.62x51 mm',
            '7.62x54R',
            '12.7x55 mm',
            'Mounted Weapons'
        ],
		ammo_values: [
            {cal: '12 Gauge Shot', type: '5.25mm Buckshot', dam: 34, pen: 1, dam_amr: 15, frag_chan: 0, cls_1: 3, cls_2: 3, cls_3: 3, cls_4: 3, cls_5: 3, cls_6: 3},
            {cal: '12 Gauge Shot', type: '8.5mm Buckshot "Magnum"', dam: 44, pen: 2, dam_amr: 26, frag_chan: 0, cls_1: 3, cls_2: 3, cls_3: 3, cls_4: 3, cls_5: 3, cls_6: 3},
            {cal: '12 Gauge Shot', type: '6.5mm Buckshot "Express"', dam: 29, pen: 3, dam_amr: 26, frag_chan: 0, cls_1: 3, cls_2: 3, cls_3: 3, cls_4: 3, cls_5: 3, cls_6: 3},
            {cal: '12 Gauge Shot', type: '7mm Buckshot', dam: 32, pen: 3, dam_amr: 26, frag_chan: 0, cls_1: 3, cls_2: 3, cls_3: 3, cls_4: 3, cls_5: 3, cls_6: 3},
            {cal: '12 Gauge Shot', type: 'Flechette', dam: 19, pen: 28, dam_amr: 26, frag_chan: 0, cls_1: 6, cls_2: 6, cls_3: 6, cls_4: 5, cls_5: 5, cls_6: 4},

            {cal: '12 Gauge Slugs', type: 'RIP Slug', dam: 235, pen: 0, dam_amr: 11, frag_chan: 100, cls_1: 0, cls_2: 0, cls_3: 0, cls_4: 0, cls_5: 0, cls_6: 0},
            {cal: '12 Gauge Slugs', type: 'Superformance HP Slug', dam: 190, pen: 2, dam_amr: 12, frag_chan: 39, cls_1: 0, cls_2: 0, cls_3: 0, cls_4: 0, cls_5: 0, cls_6: 0},
            {cal: '12 Gauge Slugs', type: 'Grizzly 40 Slug', dam: 170, pen: 12, dam_amr: 48, frag_chan: 12, cls_1: 6, cls_2: 2, cls_3: 0, cls_4: 0, cls_5: 0, cls_6: 0},
            {cal: '12 Gauge Slugs', type: 'HP Copper Sabot Premier', dam: 160, pen: 13, dam_amr: 46, frag_chan: 38, cls_1: 6, cls_2: 2, cls_3: 0, cls_4: 0, cls_5: 0, cls_6: 0},
            {cal: '12 Gauge Slugs', type: 'Led Slug', dam: 147, pen: 15, dam_amr: 45, frag_chan: 20, cls_1: 6, cls_2: 4, cls_3: 1, cls_4: 0, cls_5: 0, cls_6: 0},
            {cal: '12 Gauge Slugs', type: 'Dual Sabot Slug', dam: 75, pen: 17, dam_amr: 65, frag_chan: 10, cls_1: 6, cls_2: 5, cls_3: 2, cls_4: 0, cls_5: 0, cls_6: 0},
            {cal: '12 Gauge Slugs', type: 'Slug "Poleva-3"', dam: 130, pen: 17, dam_amr: 40, frag_chan: 20, cls_1: 6, cls_2: 5, cls_3: 1, cls_4: 0, cls_5: 0, cls_6: 0},
            {cal: '12 Gauge Slugs', type: 'FTX Custom Lite Slug', dam: 153, pen: 18, dam_amr: 50, frag_chan: 10, cls_1: 6, cls_2: 5, cls_3: 1, cls_4: 0, cls_5: 0, cls_6: 0},
            {cal: '12 Gauge Slugs', type: 'Slug "Poleva-6u"', dam: 140, pen: 20, dam_amr: 50, frag_chan: 15, cls_1: 6, cls_2: 6, cls_3: 2, cls_4: 0, cls_5: 0, cls_6: 0},
            {cal: '12 Gauge Slugs', type: 'Shell With .50 BMG (Tracer)', dam: 177, pen: 23, dam_amr: 57, frag_chan: 5, cls_1: 6, cls_2: 6, cls_3: 3, cls_4: 1, cls_5: 0, cls_6: 0},
            {cal: '12 Gauge Slugs', type: 'AP 20 Slug', dam: 164, pen: 32, dam_amr: 65, frag_chan: 3, cls_1: 6, cls_2: 6, cls_3: 6, cls_4: 3, cls_5: 1, cls_6: 0},

            {cal: '20 Gauge', type: '5.6mm Buckshot', dam: 25, pen: 1, dam_amr: 12, frag_chan: 0, cls_1: 3, cls_2: 3, cls_3: 3, cls_4: 3, cls_5: 3, cls_6: 3},
            {cal: '20 Gauge', type: '6.2mm Buckshot', dam: 21, pen: 2, dam_amr: 13, frag_chan: 0, cls_1: 3, cls_2: 3, cls_3: 3, cls_4: 3, cls_5: 3, cls_6: 3},
            {cal: '20 Gauge', type: '7.5mm Buckshot', dam: 24, pen: 3, dam_amr: 14, frag_chan: 0, cls_1: 3, cls_2: 3, cls_3: 3, cls_4: 3, cls_5: 3, cls_6: 3},
            {cal: '20 Gauge', type: '7.3mm Buckshot', dam: 22, pen: 3, dam_amr: 13, frag_chan: 0, cls_1: 3, cls_2: 3, cls_3: 3, cls_4: 3, cls_5: 3, cls_6: 3},
            {cal: '20 Gauge', type: 'Devastator Slug', dam: 188, pen: 4, dam_amr: 13, frag_chan: 100, cls_1: 1, cls_2: 0, cls_3: 0, cls_4: 0, cls_5: 0, cls_6: 0},
            {cal: '20 Gauge', type: 'Slug "Poleva-3"', dam: 110, pen: 14, dam_amr: 35, frag_chan: 20, cls_1: 6, cls_2: 2, cls_3: 0, cls_4: 0, cls_5: 0, cls_6: 0},
            {cal: '20 Gauge', type: 'Star Slug', dam: 134, pen: 16, dam_amr: 42, frag_chan: 10, cls_1: 6, cls_2: 5, cls_3: 1, cls_4: 0, cls_5: 0, cls_6: 0},
            {cal: '20 Gauge', type: 'Slug "Poleva-6u"', dam: 120, pen: 17, dam_amr: 40, frag_chan: 15, cls_1: 6, cls_2: 5, cls_3: 1, cls_4: 0, cls_5: 0, cls_6: 0},

            {cal: '9x18mm', type: 'SP8', dam: 67, pen: 1, dam_amr: 2, frag_chan: 60, cls_1: 0, cls_2: 0, cls_3: 0, cls_4: 0, cls_5: 0, cls_6: 0},
            {cal: '9x18mm', type: 'SP7', dam: 77, pen: 2, dam_amr: 5, frag_chan: 2, cls_1: 0, cls_2: 0, cls_3: 0, cls_4: 0, cls_5: 0, cls_6: 0},
            {cal: '9x18mm', type: 'PSV', dam: 69, pen: 3, dam_amr: 5, frag_chan: 40, cls_1: 0, cls_2: 0, cls_3: 0, cls_4: 0, cls_5: 0, cls_6: 0},
            {cal: '9x18mm', type: 'P gzh', dam: 50, pen: 5, dam_amr: 16, frag_chan: 25, cls_1: 2, cls_2: 0, cls_3: 0, cls_4: 0, cls_5: 0, cls_6: 0},
            {cal: '9x18mm', type: 'PSO gzh', dam: 54, pen: 5, dam_amr: 13, frag_chan: 35, cls_1: 2, cls_2: 0, cls_3: 0, cls_4: 0, cls_5: 0, cls_6: 0},
            {cal: '9x18mm', type: 'PS gs PPO', dam: 55, pen: 6, dam_amr: 16, frag_chan: 25, cls_1: 3, cls_2: 0, cls_3: 0, cls_4: 0, cls_5: 0, cls_6: 0},
            {cal: '9x18mm', type: 'PRS gs', dam: 58, pen: 6, dam_amr: 16, frag_chan: 30, cls_1: 3, cls_2: 0, cls_3: 0, cls_4: 0, cls_5: 0, cls_6: 0},
            {cal: '9x18mm', type: 'PPE gzh', dam: 61, pen: 7, dam_amr: 15, frag_chan: 35, cls_1: 4, cls_2: 0, cls_3: 0, cls_4: 0, cls_5: 0, cls_6: 0},
            {cal: '9x18mm', type: 'PPT gzh', dam: 59, pen: 8, dam_amr: 22, frag_chan: 17, cls_1: 5, cls_2: 1, cls_3: 0, cls_4: 0, cls_5: 0, cls_6: 0},
            {cal: '9x18mm', type: 'PST gzh', dam: 50, pen: 12, dam_amr: 26, frag_chan: 20, cls_1: 6, cls_2: 1, cls_3: 0, cls_4: 0, cls_5: 0, cls_6: 0},
            {cal: '9x18mm', type: 'RG028 gzh', dam: 65, pen: 13, dam_amr: 26, frag_chan: 2, cls_1: 6, cls_2: 2, cls_3: 0, cls_4: 0, cls_5: 0, cls_6: 0},
            {cal: '9x18mm', type: 'BZT gzh', dam: 53, pen: 18, dam_amr: 28, frag_chan: 17, cls_1: 6, cls_2: 5, cls_3: 1, cls_4: 0, cls_5: 0, cls_6: 0},
            {cal: '9x18mm', type: 'PMM', dam: 58, pen: 24, dam_amr: 33, frag_chan: 17, cls_1: 6, cls_2: 6, cls_3: 4, cls_4: 0, cls_5: 0, cls_6: 0},
            {cal: '9x18mm', type: 'PBM', dam: 40, pen: 28, dam_amr: 30, frag_chan: 16, cls_1: 6, cls_2: 6, cls_3: 5, cls_4: 1, cls_5: 0, cls_6: 0},

            {cal: '7.62x25mm', type: 'LRNPC', dam: 66, pen: 5, dam_amr: 27, frag_chan: 35, cls_1: 3, cls_2: 0, cls_3: 0, cls_4: 0, cls_5: 0, cls_6: 0},
            {cal: '7.62x25mm', type: 'LRN', dam: 64, pen: 6, dam_amr: 28, frag_chan: 35, cls_1: 3, cls_2: 0, cls_3: 0, cls_4: 0, cls_5: 0, cls_6: 0},
            {cal: '7.62x25mm', type: 'FMJ43', dam: 60, pen: 8, dam_amr: 29, frag_chan: 25, cls_1: 5, cls_2: 0, cls_3: 0, cls_4: 0, cls_5: 0, cls_6: 0},
            {cal: '7.62x25mm', type: 'akbs', dam: 58, pen: 9, dam_amr: 32, frag_chan: 25, cls_1: 5, cls_2: 1, cls_3: 0, cls_4: 0, cls_5: 0, cls_6: 0},
            {cal: '7.62x25mm', type: 'P Gl', dam: 58, pen: 10, dam_amr: 32, frag_chan: 25, cls_1: 6, cls_2: 1, cls_3: 0, cls_4: 0, cls_5: 0, cls_6: 0},
            {cal: '7.62x25mm', type: 'T Gzh (Tracer)', dam: 60, pen: 12, dam_amr: 34, frag_chan: 17, cls_1: 6, cls_2: 1, cls_3: 0, cls_4: 0, cls_5: 0, cls_6: 0},
            {cal: '7.62x25mm', type: 'Pst gzh', dam: 50, pen: 24, dam_amr: 36, frag_chan: 20, cls_1: 6, cls_2: 6, cls_3: 3, cls_4: 1, cls_5: 0, cls_6: 0},

            {cal: '9x19mm', type: 'RIP', dam: 102, pen: 2, dam_amr: 11, frag_chan: 100, cls_1: 0, cls_2: 0, cls_3: 0, cls_4: 0, cls_5: 0, cls_6: 0},
            {cal: '9x19mm', type: 'PSO gzh', dam: 59, pen: 10, dam_amr: 32, frag_chan: 25, cls_1: 6, cls_2: 1, cls_3: 0, cls_4: 0, cls_5: 0, cls_6: 0},
            {cal: '9x19mm', type: 'Luger CCI', dam: 70, pen: 10, dam_amr: 38, frag_chan: 25, cls_1: 6, cls_2: 2, cls_3: 0, cls_4: 0, cls_5: 0, cls_6: 0},
            {cal: '9x19mm', type: 'Green Tracer', dam: 58, pen: 14, dam_amr: 33, frag_chan: 15, cls_1: 6, cls_2: 3, cls_3: 1, cls_4: 0, cls_5: 0, cls_6: 0},
            {cal: '9x19mm', type: 'PST gzh', dam: 54, pen: 20, dam_amr: 33, frag_chan: 15, cls_1: 6, cls_2: 6, cls_3: 2, cls_4: 0, cls_5: 0, cls_6: 0},
            {cal: '9x19mm', type: 'AP 6.3', dam: 52, pen: 29, dam_amr: 48, frag_chan: 5, cls_1: 6, cls_2: 6, cls_3: 5, cls_4: 3, cls_5: 1, cls_6: 0},

            {cal: '.45', type: 'RIP', dam: 127, pen: 3, dam_amr: 12, frag_chan: 100, cls_1: 1, cls_2: 0, cls_3: 0, cls_4: 0, cls_5: 0, cls_6: 0},
            {cal: '.45', type: 'ACP', dam: 72, pen: 19, dam_amr: 36, frag_chan: 1, cls_1: 6, cls_2: 5, cls_3: 1, cls_4: 0, cls_5: 0, cls_6: 0},

            {cal: '9x21mm', type: 'sp12', dam: 78, pen: 14, dam_amr: 63, frag_chan: 35, cls_1: 6, cls_2: 2, cls_3: 0, cls_4: 0, cls_5: 0, cls_6: 0},
            {cal: '9x21mm', type: 'sp11', dam: 70, pen: 16, dam_amr: 44, frag_chan: 30, cls_1: 6, cls_2: 3, cls_3: 0, cls_4: 0, cls_5: 0, cls_6: 0},
            {cal: '9x21mm', type: 'sp10', dam: 49, pen: 32, dam_amr: 46, frag_chan: 20, cls_1: 6, cls_2: 6, cls_3: 6, cls_4: 4, cls_5: 1, cls_6: 1},
            {cal: '9x21mm', type: 'sp13', dam: 62, pen: 36, dam_amr: 47, frag_chan: 20, cls_1: 6, cls_2: 6, cls_3: 6, cls_4: 5, cls_5: 2, cls_6: 1},

            {cal: '5.7x28 mm', type: 'r37f', dam: 98, pen: 8, dam_amr: 7, frag_chan: 100, cls_1: 4, cls_2: 0, cls_3: 0, cls_4: 0, cls_5: 0, cls_6: 0},
            {cal: '5.7x28 mm', type: 'ss198lf', dam: 74, pen: 10, dam_amr: 15, frag_chan: 80, cls_1: 6, cls_2: 1, cls_3: 0, cls_4: 0, cls_5: 0, cls_6: 0},
            {cal: '5.7x28 mm', type: 'r37x', dam: 81, pen: 11, dam_amr: 14, frag_chan: 70, cls_1: 6, cls_2: 1, cls_3: 0, cls_4: 0, cls_5: 0, cls_6: 0},
            {cal: '5.7x28 mm', type: 'ss197sr', dam: 62, pen: 20, dam_amr: 22, frag_chan: 50, cls_1: 6, cls_2: 6, cls_3: 2, cls_4: 0, cls_5: 0, cls_6: 0},
            {cal: '5.7x28 mm', type: 'l191 (Tracer)', dam: 58, pen: 33, dam_amr: 41, frag_chan: 20, cls_1: 6, cls_2: 6, cls_3: 6, cls_4: 3, cls_5: 1, cls_6: 1},
            {cal: '5.7x28 mm', type: 'sb193', dam: 54, pen: 35, dam_amr: 37, frag_chan: 20, cls_1: 6, cls_2: 6, cls_3: 6, cls_4: 4, cls_5: 2, cls_6: 1},
            {cal: '5.7x28 mm', type: 'ss190', dam: 49, pen: 37, dam_amr: 43, frag_chan: 20, cls_1: 6, cls_2: 6, cls_3: 6, cls_4: 5, cls_5: 3, cls_6: 1},

            {cal: '4.6x30 mm', type: 'Action SX', dam: 65, pen: 13, dam_amr: 39, frag_chan: 50, cls_1: 6, cls_2: 2, cls_3: 1, cls_4: 0, cls_5: 0, cls_6: 0},
            {cal: '4.6x30 mm', type: 'FMJ SX', dam: 43, pen: 30, dam_amr: 41, frag_chan: 20, cls_1: 6, cls_2: 6, cls_3: 6, cls_4: 3, cls_5: 1, cls_6: 1},
            {cal: '4.6x30 mm', type: 'Subsonic SX', dam: 41, pen: 34, dam_amr: 46, frag_chan: 20, cls_1: 6, cls_2: 6, cls_3: 6, cls_4: 4, cls_5: 3, cls_6: 1},
            {cal: '4.6x30 mm', type: 'AP SX', dam: 35, pen: 47, dam_amr: 46, frag_chan: 10, cls_1: 6, cls_2: 6, cls_3: 6, cls_4: 6, cls_5: 5, cls_6: 4},

            {cal: '9x39mm', type: 'sp5', dam: 68, pen: 35, dam_amr: 52, frag_chan: 20, cls_1: 6, cls_2: 6, cls_3: 6, cls_4: 5, cls_5: 3, cls_6: 2},
            {cal: '9x39mm', type: 'sp6', dam: 58, pen: 43, dam_amr: 60, frag_chan: 10, cls_1: 6, cls_2: 6, cls_3: 6, cls_4: 6, cls_5: 5, cls_6: 4},
            {cal: '9x39mm', type: 'SPP', dam: 64, pen: 45, dam_amr: 56, frag_chan: 20, cls_1: 6, cls_2: 6, cls_3: 6, cls_4: 6, cls_5: 5, cls_6: 4},
            {cal: '9x39mm', type: 'BP', dam: 60, pen: 48, dam_amr: 68, frag_chan: 10, cls_1: 6, cls_2: 6, cls_3: 6, cls_4: 6, cls_5: 5, cls_6: 5},

            {cal: '.366', type: 'Geksa', dam: 102, pen: 14, dam_amr: 38, frag_chan: 45, cls_1: 6, cls_2: 3, cls_3: 0, cls_4: 0, cls_5: 0, cls_6: 0},
            {cal: '.366', type: 'FMJ', dam: 93, pen: 23, dam_amr: 41, frag_chan: 25, cls_1: 6, cls_2: 6, cls_3: 3, cls_4: 0, cls_5: 0, cls_6: 0},
            {cal: '.366', type: 'EKO', dam: 68, pen: 30, dam_amr: 30, frag_chan: 20, cls_1: 6, cls_2: 6, cls_3: 6, cls_4: 2, cls_5: 0, cls_6: 0},

            {cal: '5.45x39 mm', type: 'SP', dam: 68, pen: 11, dam_amr: 34, frag_chan: 45, cls_1: 6, cls_2: 1, cls_3: 0, cls_4: 0, cls_5: 0, cls_6: 0},
            {cal: '5.45x39 mm', type: 'HP', dam: 74, pen: 11, dam_amr: 20, frag_chan: 35, cls_1: 6, cls_2: 1, cls_3: 0, cls_4: 0, cls_5: 0, cls_6: 0},
            {cal: '5.45x39 mm', type: 'PRS', dam: 60, pen: 14, dam_amr: 28, frag_chan: 30, cls_1: 6, cls_2: 2, cls_3: 0, cls_4: 0, cls_5: 0, cls_6: 0},
            {cal: '5.45x39 mm', type: 'US', dam: 65, pen: 15, dam_amr: 34, frag_chan: 10, cls_1: 6, cls_2: 3, cls_3: 0, cls_4: 0, cls_5: 0, cls_6: 0},
            {cal: '5.45x39 mm', type: 'FMJ', dam: 54, pen: 20, dam_amr: 30, frag_chan: 25, cls_1: 6, cls_2: 5, cls_3: 1, cls_4: 0, cls_5: 0, cls_6: 0},
            {cal: '5.45x39 mm', type: 'T (Tracer)', dam: 57, pen: 20, dam_amr: 38, frag_chan: 16, cls_1: 6, cls_2: 6, cls_3: 1, cls_4: 0, cls_5: 0, cls_6: 0},
            {cal: '5.45x39 mm', type: 'PS', dam: 50, pen: 25, dam_amr: 35, frag_chan: 40, cls_1: 6, cls_2: 6, cls_3: 4, cls_4: 1, cls_5: 0, cls_6: 0},
            {cal: '5.45x39 mm', type: 'PP', dam: 46, pen: 30, dam_amr: 32, frag_chan: 17, cls_1: 6, cls_2: 6, cls_3: 6, cls_4: 3, cls_5: 1, cls_6: 0},
            {cal: '5.45x39 mm', type: 'BP', dam: 48, pen: 32, dam_amr: 41, frag_chan: 16, cls_1: 6, cls_2: 6, cls_3: 6, cls_4: 4, cls_5: 2, cls_6: 0},
            {cal: '5.45x39 mm', type: 'BT (Tracer)', dam: 44, pen: 37, dam_amr: 49, frag_chan: 16, cls_1: 6, cls_2: 6, cls_3: 6, cls_4: 5, cls_5: 3, cls_6: 1},
            {cal: '5.45x39 mm', type: 'BS', dam: 40, pen: 51, dam_amr: 57, frag_chan: 17, cls_1: 6, cls_2: 6, cls_3: 6, cls_4: 6, cls_5: 6, cls_6: 5},
            {cal: '5.45x39 mm', type: '7n39', dam: 37, pen: 62, dam_amr: 60, frag_chan: 2, cls_1: 6, cls_2: 6, cls_3: 6, cls_4: 6, cls_5: 6, cls_6: 6},

            {cal: '5.56x45 mm', type: 'Warmage', dam: 85, pen: 3, dam_amr: 14, frag_chan: 90, cls_1: 1, cls_2: 0, cls_3: 0, cls_4: 0, cls_5: 0, cls_6: 0},
            {cal: '5.56x45 mm', type: '55_HP', dam: 75, pen: 9, dam_amr: 22, frag_chan: 70, cls_1: 5, cls_2: 0, cls_3: 0, cls_4: 0, cls_5: 0, cls_6: 0},
            {cal: '5.56x45 mm', type: 'MK_255_Mod_0', dam: 60, pen: 17, dam_amr: 32, frag_chan: 3, cls_1: 6, cls_2: 4, cls_3: 1, cls_4: 0, cls_5: 0, cls_6: 0},
            {cal: '5.56x45 mm', type: 'M856 (Tracer)', dam: 55, pen: 23, dam_amr: 34, frag_chan: 33, cls_1: 6, cls_2: 6, cls_3: 3, cls_4: 1, cls_5: 0, cls_6: 0},
            {cal: '5.56x45 mm', type: 'FMJ', dam: 52, pen: 24, dam_amr: 33, frag_chan: 50, cls_1: 6, cls_2: 6, cls_3: 4, cls_4: 1, cls_5: 0, cls_6: 0},
            {cal: '5.56x45 mm', type: 'M855', dam: 49, pen: 29, dam_amr: 37, frag_chan: 40, cls_1: 6, cls_2: 6, cls_3: 5, cls_4: 3, cls_5: 1, cls_6: 0},
            {cal: '5.56x45 mm', type: 'M856A1 (Tracer)', dam: 51, pen: 37, dam_amr: 52, frag_chan: 33, cls_1: 6, cls_2: 6, cls_3: 6, cls_4: 5, cls_5: 3, cls_6: 1},
            {cal: '5.56x45 mm', type: 'M855A1', dam: 44, pen: 40, dam_amr: 52, frag_chan: 34, cls_1: 6, cls_2: 6, cls_3: 6, cls_4: 6, cls_5: 4, cls_6: 2},
            {cal: '5.56x45 mm', type: 'M995', dam: 41, pen: 53, dam_amr: 58, frag_chan: 32, cls_1: 6, cls_2: 6, cls_3: 6, cls_4: 6, cls_5: 6, cls_6: 5},

            {cal: '7.62x39 mm', type: 'HP', dam: 87, pen: 15, dam_amr: 35, frag_chan: 26, cls_1: 6, cls_2: 4, cls_3: 1, cls_4: 0, cls_5: 0, cls_6: 0},
            {cal: '7.62x39 mm', type: 'US', dam: 56, pen: 29, dam_amr: 42, frag_chan: 8, cls_1: 6, cls_2: 6, cls_3: 5, cls_4: 3, cls_5: 1, cls_6: 0},
            {cal: '7.62x39 mm', type: 'T45M (Tracer)', dam: 62, pen: 30, dam_amr: 46, frag_chan: 12, cls_1: 6, cls_2: 6, cls_3: 6, cls_4: 3, cls_5: 2, cls_6: 1},
            {cal: '7.62x39 mm', type: 'PS', dam: 57, pen: 32, dam_amr: 52, frag_chan: 25, cls_1: 6, cls_2: 6, cls_3: 6, cls_4: 4, cls_5: 3, cls_6: 1},
            {cal: '7.62x39 mm', type: 'BP', dam: 58, pen: 47, dam_amr: 63, frag_chan: 12, cls_1: 6, cls_2: 6, cls_3: 6, cls_4: 6, cls_5: 5, cls_6: 4},

            {cal: '7.62x51 mm', type: 'Ultra Nosler', dam: 102, pen: 15, dam_amr: 20, frag_chan: 70, cls_1: 6, cls_2: 4, cls_3: 0, cls_4: 0, cls_5: 0, cls_6: 0},
            {cal: '7.62x51 mm', type: 'BPZ FMJ', dam: 88, pen: 31, dam_amr: 33, frag_chan: 25, cls_1: 6, cls_2: 6, cls_3: 6, cls_4: 2, cls_5: 0, cls_6: 0},
            {cal: '7.62x51 mm', type: 'TPZ SP', dam: 60, pen: 36, dam_amr: 40, frag_chan: 20, cls_1: 6, cls_2: 6, cls_3: 6, cls_4: 5, cls_5: 2, cls_6: 0},
            {cal: '7.62x51 mm', type: 'M80', dam: 80, pen: 41, dam_amr: 66, frag_chan: 17, cls_1: 6, cls_2: 6, cls_3: 6, cls_4: 6, cls_5: 4, cls_6: 3},
            {cal: '7.62x51 mm', type: 'M62 (Tracer)', dam: 79, pen: 54, dam_amr: 75, frag_chan: 14, cls_1: 6, cls_2: 6, cls_3: 6, cls_4: 6, cls_5: 6, cls_6: 5},
            {cal: '7.62x51 mm', type: 'M61', dam: 70, pen: 68, dam_amr: 83, frag_chan: 13, cls_1: 6, cls_2: 6, cls_3: 6, cls_4: 6, cls_5: 6, cls_6: 6},

            {cal: '7.62x54R', type: 'T-46M (Tracer)', dam: 82, pen: 41, dam_amr: 83, frag_chan: 18, cls_1: 6, cls_2: 6, cls_3: 6, cls_4: 6, cls_5: 4, cls_6: 3},
            {cal: '7.62x54R', type: 'LPS_Gzh', dam: 81, pen: 42, dam_amr: 78, frag_chan: 18, cls_1: 6, cls_2: 6, cls_3: 6, cls_4: 6, cls_5: 4, cls_6: 3},
            {cal: '7.62x54R', type: '7N1', dam: 86, pen: 45, dam_amr: 84, frag_chan: 8, cls_1: 6, cls_2: 6, cls_3: 6, cls_4: 6, cls_5: 5, cls_6: 4},
            {cal: '7.62x54R', type: '7BT1 (Tracer)', dam: 78, pen: 59, dam_amr: 87, frag_chan: 8, cls_1: 6, cls_2: 6, cls_3: 6, cls_4: 6, cls_5: 6, cls_6: 6},
            {cal: '7.62x54R', type: 'SNB', dam: 75, pen: 62, dam_amr: 87, frag_chan: 8, cls_1: 6, cls_2: 6, cls_3: 6, cls_4: 6, cls_5: 6, cls_6: 6},
            {cal: '7.62x54R', type: '7n37', dam: 72, pen: 70, dam_amr: 88, frag_chan: 8, cls_1: 6, cls_2: 6, cls_3: 6, cls_4: 6, cls_5: 6, cls_6: 6},

            {cal: '12.7x55 mm', type: 'ps12a', dam: 165, pen: 10, dam_amr: 22, frag_chan: 70, cls_1: 6, cls_2: 0, cls_3: 0, cls_4: 0, cls_5: 0, cls_6: 0},
            {cal: '12.7x55 mm', type: 'ps12', dam: 115, pen: 28, dam_amr: 60, frag_chan: 30, cls_1: 6, cls_2: 6, cls_3: 5, cls_4: 2, cls_5: 1, cls_6: 0},
            {cal: '12.7x55 mm', type: 'ps12b', dam: 102, pen: 46, dam_amr: 57, frag_chan: 30, cls_1: 6, cls_2: 6, cls_3: 6, cls_4: 6, cls_5: 5, cls_6: 4},

            {cal: 'Mounted Weapons', type: '30mm Grenade', dam: 199, pen: 1, dam_amr: 95, frag_chan: 0, cls_1: 0, cls_2: 0, cls_3: 0, cls_4: 0, cls_5: 0, cls_6: 0},
            {cal: 'Mounted Weapons', type: '12.7x108mm', dam: 182, pen: 88, dam_amr: 88, frag_chan: 17, cls_1: 6, cls_2: 6, cls_3: 6, cls_4: 6, cls_5: 6, cls_6: 6},
            {cal: 'Mounted Weapons', type: '12.7x108mm Tracer', dam: 199, pen: 80, dam_amr: 95, frag_chan: 17, cls_1: 6, cls_2: 6, cls_3: 6, cls_4: 6, cls_5: 6, cls_6: 6}
        ]
	},
	methods: {
		GetAmOrPm: function(hour) {
			if (hour > 24) {
				hour -= 24;
			}
			return hour >= 12 ? 'pm' : 'am';
		}
	}
});


// For Vue Values
function GetDateValues() {
	var date = new Date();
	var returnDateObject = {
		dayOfWeek: date.getDay(),
		hourOfDay: date.getHours(),
		mmddyyyy: (date.getMonth() + 1).toString() + "-" + (date.getDate()).toString() + "-" + date.getFullYear().toString()
	};
	return returnDateObject;
}
function GetNextDesignNumber() {
	x = 1;
	while (document.querySelectorAll('[data-design-code$="0' + x + '"]').length) {
		x += 1;
	}
	return x;
}


// App Functions
function InitNavigationMenu() {
    let nav_toggler = document.querySelector('.navbar-toggler');
    let nav_popup = document.querySelector('.navbar-popup');

    nav_toggler.addEventListener('click', function() {
        if (nav_popup.classList.contains('navbar-popup-show')) {
            nav_toggler.classList.remove('navbar-toggler-expand');
            nav_popup.classList.remove('navbar-popup-show');
        }
        else {
            nav_toggler.classList.add('navbar-toggler-expand');
            nav_popup.classList.add('navbar-popup-show');
        }
    });

    // close menu popup on mousedown outside of menu popup
    document.addEventListener('mousedown', function(event) {
        if (nav_popup.classList.contains('navbar-popup-show')) {
            contains_login_popup = false;
            node = event.target;

            // check event.target parents for menu popup and menu toggler
            while (node !== null) {
                if (node === nav_popup || node === nav_toggler) {
                    contains_login_popup = true;
                }
                node = node.parentElement;
            }

            // if outside of menu popup, close menu popup and flip chevron
            if (!contains_login_popup) {
                nav_toggler.classList.remove('navbar-toggler-expand');
                nav_popup.classList.remove('navbar-popup-show');
            }
        }
    });
}