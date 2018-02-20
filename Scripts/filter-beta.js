
// var dorm = document.getElementById("sliderValue-dorms");
// var dormSlider = document.getElementById('range-dorms');
// dormSlider.addEventListener('input', funcsadf, false);
// function funcsadf() {
//   dorm.innerHTML = dormSlider.value;
// }

var data;
var dataMajor;
var dataGeneralSliderNameArray = [];
var checkedBoxes = [];
var previousRanking = {};
var justReset = true;
if(1){
  dataMajor = ['Accounting and Finance', 'Agricultural Sciences', 'Anthropology', 'Architecture', 'Art', 'Biology', 'Business', 'Chemistry', 'Communication', 'Computer Science', 'Criminal Justice', 'Design', 'Economics', 'Education', 'Engineering', 'English', 'Environment Science', 'Film/Photography', 'History', 'Information Technology', 'International Relations', 'Kinesiology and Therapy', 'Math', 'Music', 'Nursing', 'Performing Arts', 'Philosophy', 'Physics', 'Political Science', 'Psychology', 'Religious Studies'];
  dataGeneralSliderNameArray = ['ranking','international students ratio','student faculty ratio','class size','party culture','safety','student life','athletics','dorms','campus food','location','campus'];
  data = {'Princeton University': {'ranking': 5.0, 'international students ratio': 2.8529260168000006, 'student faculty ratio': 4.3781455, 'class size': 4.4096624570000005, 'party culture': 3.636363636363636, 'safety': 3.636363636363636, 'student life': 5.0, 'athletics': 3.636363636363636, 'dorms': 4.545454545454545, 'campus food': 4.545454545454545, 'location': 3.1818181818181817, 'campus': 4.545454545454545, 'Accounting and Finance': 3.5211267605633805, 'Agricultural Sciences': 0, 'Anthropology': 3.7878787878787876, 'Architecture': 0, 'Art': 0, 'Biology': 4.310344827586207, 'Business': 3.125, 'Chemistry': 3.90625, 'Communication': 0, 'Computer Science': 3.90625, 'Criminal Justice': 0, 'Design': 0, 'Economics': 4.237288135593221, 'Education': 0, 'Engineering': 4.8076923076923075, 'English': 4.62962962962963, 'Environment Science': 0, 'Film/Photography': 0, 'History': 4.62962962962963, 'Information Technology': 0, 'International Relations': 0, 'Kinesiology and Therapy': 0, 'Math': 4.385964912280702, 'Music': 0, 'Nursing': 0, 'Performing Arts': 0, 'Philosophy': 4.901960784313726, 'Physics': 4.545454545454545, 'Political Science': 4.545454545454545, 'Psychology': 4.62962962962963, 'Religious Studies': 0}, 'Harvard University': {'ranking': 4.896326530612245, 'international students ratio': 2.8046480128000004, 'student faculty ratio': 3.79663198, 'class size': 4.491995708000001, 'party culture': 4.090909090909091, 'safety': 3.1818181818181817, 'student life': 5.0, 'athletics': 3.1818181818181817, 'dorms': 4.545454545454545, 'campus food': 3.1818181818181817, 'location': 4.545454545454545, 'campus': 4.545454545454545, 'Accounting and Finance': 4.901960784313726, 'Agricultural Sciences': 0, 'Anthropology': 5.0, 'Architecture': 0, 'Art': 0, 'Biology': 5.0, 'Business': 4.8076923076923075, 'Chemistry': 5.0, 'Communication': 0, 'Computer Science': 4.62962962962963, 'Criminal Justice': 0, 'Design': 0, 'Economics': 5.0, 'Education': 0, 'Engineering': 4.385964912280702, 'English': 5.0, 'Environment Science': 4.901960784313726, 'Film/Photography': 0, 'History': 5.0, 'Information Technology': 0, 'International Relations': 0, 'Kinesiology and Therapy': 0, 'Math': 5.0, 'Music': 0, 'Nursing': 0, 'Performing Arts': 0, 'Philosophy': 0, 'Physics': 4.8076923076923075, 'Political Science': 5.0, 'Psychology': 4.8076923076923075, 'Religious Studies': 0}, 'University of Chicago': {'ranking': 4.794421768707483, 'international students ratio': 2.8848814408, 'student faculty ratio': 4.3781455, 'class size': 4.742995457, 'party culture': 3.636363636363636, 'safety': 2.727272727272727, 'student life': 5.0, 'athletics': 2.727272727272727, 'dorms': 4.545454545454545, 'campus food': 4.545454545454545, 'location': 3.636363636363636, 'campus': 4.545454545454545, 'Accounting and Finance': 4.716981132075471, 'Agricultural Sciences': 0, 'Anthropology': 4.901960784313726, 'Architecture': 0, 'Art': 0, 'Biology': 3.90625, 'Business': 4.237288135593221, 'Chemistry': 3.5714285714285716, 'Communication': 0, 'Computer Science': 3.6764705882352944, 'Criminal Justice': 0, 'Design': 0, 'Economics': 4.716981132075471, 'Education': 0, 'Engineering': 0, 'English': 4.385964912280702, 'Environment Science': 4.385964912280702, 'Film/Photography': 0, 'History': 4.716981132075471, 'Information Technology': 0, 'International Relations': 4.4642857142857135, 'Kinesiology and Therapy': 0, 'Math': 4.716981132075471, 'Music': 0, 'Nursing': 0, 'Performing Arts': 4.4642857142857135, 'Philosophy': 4.8076923076923075, 'Physics': 4.4642857142857135, 'Political Science': 4.166666666666667, 'Psychology': 4.166666666666667, 'Religious Studies': 0}, 'Yale University': {'ranking': 4.794421768707483, 'international students ratio': 2.7068504800000004, 'student faculty ratio': 4.08234672, 'class size': 4.574995625000001, 'party culture': 4.545454545454545, 'safety': 1.818181818181818, 'student life': 5.0, 'athletics': 4.090909090909091, 'dorms': 5.0, 'campus food': 4.545454545454545, 'location': 3.1818181818181817, 'campus': 5.0, 'Accounting and Finance': 3.9682539682539684, 'Agricultural Sciences': 3.9682539682539684, 'Anthropology': 3.90625, 'Architecture': 0, 'Art': 0, 'Biology': 4.8076923076923075, 'Business': 4.032258064516129, 'Chemistry': 4.032258064516129, 'Communication': 0, 'Computer Science': 3.7878787878787876, 'Criminal Justice': 0, 'Design': 0, 'Economics': 4.62962962962963, 'Education': 0, 'Engineering': 4.4642857142857135, 'English': 4.716981132075471, 'Environment Science': 4.8076923076923075, 'Film/Photography': 0, 'History': 4.901960784313726, 'Information Technology': 0, 'International Relations': 5.0, 'Kinesiology and Therapy': 0, 'Math': 4.545454545454545, 'Music': 0, 'Nursing': 0, 'Performing Arts': 0, 'Philosophy': 0, 'Physics': 4.716981132075471, 'Political Science': 4.901960784313726, 'Psychology': 5.0, 'Religious Studies': 0}, 'Columbia University': {'ranking': 4.595918367346939, 'international students ratio': 3.2688051808000003, 'student faculty ratio': 4.08234672, 'class size': 5.174661692000001, 'party culture': 4.090909090909091, 'safety': 2.727272727272727, 'student life': 5.0, 'athletics': 3.1818181818181817, 'dorms': 3.1818181818181817, 'campus food': 4.545454545454545, 'location': 4.545454545454545, 'campus': 4.090909090909091, 'Accounting and Finance': 4.032258064516129, 'Agricultural Sciences': 0, 'Anthropology': 4.8076923076923075, 'Architecture': 4.716981132075471, 'Art': 0, 'Biology': 4.032258064516129, 'Business': 4.098360655737705, 'Chemistry': 3.73134328358209, 'Communication': 0, 'Computer Science': 4.032258064516129, 'Criminal Justice': 0, 'Design': 0, 'Economics': 4.237288135593221, 'Education': 0, 'Engineering': 3.90625, 'English': 4.901960784313726, 'Environment Science': 4.62962962962963, 'Film/Photography': 0, 'History': 4.545454545454545, 'Information Technology': 0, 'International Relations': 0, 'Kinesiology and Therapy': 0, 'Math': 3.9682539682539684, 'Music': 0, 'Nursing': 4.901960784313726, 'Performing Arts': 4.901960784313726, 'Philosophy': 4.716981132075471, 'Physics': 4.166666666666667, 'Political Science': 4.385964912280702, 'Psychology': 4.098360655737705, 'Religious Studies': 0}, 'Massachusetts Institute of Technology': {'ranking': 4.595918367346939, 'international students ratio': 2.45511442, 'student faculty ratio': 4.99999518, 'class size': 4.166662700000001, 'party culture': 4.545454545454545, 'safety': 3.1818181818181817, 'student life': 5.0, 'athletics': 2.727272727272727, 'dorms': 4.090909090909091, 'campus food': 3.636363636363636, 'location': 5.0, 'campus': 3.636363636363636, 'Accounting and Finance': 4.545454545454545, 'Agricultural Sciences': 0, 'Anthropology': 3.1645569620253164, 'Architecture': 5.0, 'Art': 0, 'Biology': 4.716981132075471, 'Business': 4.901960784313726, 'Chemistry': 4.901960784313726, 'Communication': 0, 'Computer Science': 5.0, 'Criminal Justice': 0, 'Design': 0, 'Economics': 4.901960784313726, 'Education': 0, 'Engineering': 5.0, 'English': 0, 'Environment Science': 0, 'Film/Photography': 0, 'History': 0, 'Information Technology': 0, 'International Relations': 0, 'Kinesiology and Therapy': 0, 'Math': 4.901960784313726, 'Music': 0, 'Nursing': 0, 'Performing Arts': 0, 'Philosophy': 0, 'Physics': 4.901960784313726, 'Political Science': 0, 'Psychology': 0, 'Religious Studies': 0}, 'Stanford University': {'ranking': 4.595918367346939, 'international students ratio': 2.3862374728, 'student faculty ratio': 4.6840283199999995, 'class size': 4.166662700000001, 'party culture': 3.636363636363636, 'safety': 2.727272727272727, 'student life': 5.0, 'athletics': 5.0, 'dorms': 4.545454545454545, 'campus food': 5.0, 'location': 3.1818181818181817, 'campus': 5.0, 'Accounting and Finance': 4.385964912280702, 'Agricultural Sciences': 0, 'Anthropology': 4.385964912280702, 'Architecture': 0, 'Art': 0, 'Biology': 4.901960784313726, 'Business': 4.716981132075471, 'Chemistry': 4.901960784313726, 'Communication': 4.901960784313726, 'Computer Science': 4.901960784313726, 'Criminal Justice': 0, 'Design': 0, 'Economics': 4.8076923076923075, 'Education': 0, 'Engineering': 4.901960784313726, 'English': 4.8076923076923075, 'Environment Science': 5.0, 'Film/Photography': 0, 'History': 4.8076923076923075, 'Information Technology': 0, 'International Relations': 4.901960784313726, 'Kinesiology and Therapy': 0, 'Math': 4.8076923076923075, 'Music': 0, 'Nursing': 0, 'Performing Arts': 0, 'Philosophy': 5.0, 'Physics': 4.62962962962963, 'Political Science': 4.62962962962963, 'Psychology': 4.901960784313726, 'Religious Studies': 0}, 'University of Pennsylvania': {'ranking': 4.311428571428572, 'international students ratio': 2.8368793311999996, 'student faculty ratio': 4.08234672, 'class size': 4.166662700000001, 'party culture': 5.0, 'safety': 2.727272727272727, 'student life': 5.0, 'athletics': 3.1818181818181817, 'dorms': 3.1818181818181817, 'campus food': 3.1818181818181817, 'location': 4.545454545454545, 'campus': 4.090909090909091, 'Accounting and Finance': 5.0, 'Agricultural Sciences': 0, 'Anthropology': 4.098360655737705, 'Architecture': 0, 'Art': 4.62962962962963, 'Biology': 4.385964912280702, 'Business': 5.0, 'Chemistry': 3.3783783783783785, 'Communication': 4.716981132075471, 'Computer Science': 3.73134328358209, 'Criminal Justice': 5.0, 'Design': 0, 'Economics': 4.166666666666667, 'Education': 0, 'Engineering': 4.237288135593221, 'English': 3.9682539682539684, 'Environment Science': 4.098360655737705, 'Film/Photography': 0, 'History': 4.4642857142857135, 'Information Technology': 0, 'International Relations': 4.8076923076923075, 'Kinesiology and Therapy': 0, 'Math': 4.098360655737705, 'Music': 0, 'Nursing': 5.0, 'Performing Arts': 0, 'Philosophy': 4.62962962962963, 'Physics': 4.237288135593221, 'Political Science': 4.310344827586207, 'Psychology': 4.237288135593221, 'Religious Studies': 0}, 'Duke University': {'ranking': 4.220136054421769, 'international students ratio': 2.5906611592, 'student faculty ratio': 4.08234672, 'class size': 4.246995953000001, 'party culture': 4.090909090909091, 'safety': 2.2727272727272725, 'student life': 5.0, 'athletics': 5.0, 'dorms': 3.1818181818181817, 'campus food': 3.636363636363636, 'location': 2.727272727272727, 'campus': 4.545454545454545, 'Accounting and Finance': 4.716981132075471, 'Agricultural Sciences': 3.3783783783783785, 'Anthropology': 4.4642857142857135, 'Architecture': 0, 'Art': 0, 'Biology': 3.7878787878787876, 'Business': 3.846153846153846, 'Chemistry': 3.4722222222222223, 'Communication': 0, 'Computer Science': 3.4722222222222223, 'Criminal Justice': 0, 'Design': 0, 'Economics': 3.9682539682539684, 'Education': 4.901960784313726, 'Engineering': 4.310344827586207, 'English': 3.7878787878787876, 'Environment Science': 4.716981132075471, 'Film/Photography': 0, 'History': 3.5714285714285716, 'Information Technology': 0, 'International Relations': 0, 'Kinesiology and Therapy': 0, 'Math': 4.032258064516129, 'Music': 0, 'Nursing': 4.716981132075471, 'Performing Arts': 4.032258064516129, 'Philosophy': 4.545454545454545, 'Physics': 3.73134328358209, 'Political Science': 3.9682539682539684, 'Psychology': 4.385964912280702, 'Religious Studies': 0}, 'California Institute of Technology': {'ranking': 4.13061224489796, 'international students ratio': 2.3862374728, 'student faculty ratio': 4.99999518, 'class size': 3.9296629370000002, 'party culture': 2.727272727272727, 'safety': 3.1818181818181817, 'student life': 4.090909090909091, 'athletics': 2.2727272727272725, 'dorms': 4.090909090909091, 'campus food': 2.727272727272727, 'location': 3.1818181818181817, 'campus': 4.090909090909091, 'Accounting and Finance': 0, 'Agricultural Sciences': 0, 'Anthropology': 0, 'Architecture': 0, 'Art': 0, 'Biology': 4.385964912280702, 'Business': 2.840909090909091, 'Chemistry': 4.8076923076923075, 'Communication': 0, 'Computer Science': 4.545454545454545, 'Criminal Justice': 0, 'Design': 0, 'Economics': 3.4722222222222223, 'Education': 0, 'Engineering': 4.62962962962963, 'English': 0, 'Environment Science': 0, 'Film/Photography': 0, 'History': 0, 'Information Technology': 0, 'International Relations': 0, 'Kinesiology and Therapy': 0, 'Math': 4.62962962962963, 'Music': 0, 'Nursing': 0, 'Performing Arts': 0, 'Philosophy': 0, 'Physics': 5.0, 'Political Science': 0, 'Psychology': 0, 'Religious Studies': 0}, 'Dartmouth College': {'ranking': 4.042857142857144, 'international students ratio': 2.28154258, 'student faculty ratio': 3.79663198, 'class size': 3.547996652, 'party culture': 2.727272727272727, 'safety': 3.1818181818181817, 'student life': 4.090909090909091, 'athletics': 3.636363636363636, 'dorms': 3.636363636363636, 'campus food': 4.545454545454545, 'location': 0.9090909090909092, 'campus': 4.545454545454545, 'Accounting and Finance': 0, 'Agricultural Sciences': 0, 'Anthropology': 4.032258064516129, 'Architecture': 0, 'Art': 0, 'Biology': 3.012048192771084, 'Business': 3.012048192771084, 'Chemistry': 1.865671641791045, 'Communication': 0, 'Computer Science': 2.976190476190476, 'Criminal Justice': 0, 'Design': 0, 'Economics': 3.4246575342465753, 'Education': 0, 'Engineering': 3.125, 'English': 4.166666666666667, 'Environment Science': 3.9682539682539684, 'Film/Photography': 0, 'History': 3.9682539682539684, 'Information Technology': 0, 'International Relations': 0, 'Kinesiology and Therapy': 0, 'Math': 3.90625, 'Music': 0, 'Nursing': 0, 'Performing Arts': 0, 'Philosophy': 0, 'Physics': 4.098360655737705, 'Political Science': 4.4642857142857135, 'Psychology': 3.846153846153846, 'Religious Studies': 0}, 'Johns Hopkins University': {'ranking': 4.042857142857144, 'international students ratio': 2.62408802, 'student faculty ratio': 3.79663198, 'class size': 4.491995708000001, 'party culture': 3.1818181818181817, 'safety': 2.727272727272727, 'student life': 4.090909090909091, 'athletics': 2.727272727272727, 'dorms': 3.1818181818181817, 'campus food': 3.636363636363636, 'location': 3.1818181818181817, 'campus': 3.636363636363636, 'Accounting and Finance': 1.6778523489932886, 'Agricultural Sciences': 0, 'Anthropology': 3.0864197530864197, 'Architecture': 0, 'Art': 0, 'Biology': 3.846153846153846, 'Business': 2.380952380952381, 'Chemistry': 3.4722222222222223, 'Communication': 0, 'Computer Science': 3.0864197530864197, 'Criminal Justice': 0, 'Design': 0, 'Economics': 3.125, 'Education': 0, 'Engineering': 3.1645569620253164, 'English': 2.5, 'Environment Science': 3.5714285714285716, 'Film/Photography': 0, 'History': 2.577319587628866, 'Information Technology': 0, 'International Relations': 3.5714285714285716, 'Kinesiology and Therapy': 0, 'Math': 2.4752475247524752, 'Music': 3.4722222222222223, 'Nursing': 4.62962962962963, 'Performing Arts': 0, 'Philosophy': 0, 'Physics': 0, 'Political Science': 2.100840336134454, 'Psychology': 3.0864197530864197, 'Religious Studies': 0}, 'Northwestern University': {'ranking': 4.042857142857144, 'international students ratio': 2.5062893152, 'student faculty ratio': 3.79663198, 'class size': 4.827995372, 'party culture': 4.090909090909091, 'safety': 3.1818181818181817, 'student life': 5.0, 'athletics': 5.0, 'dorms': 1.818181818181818, 'campus food': 3.636363636363636, 'location': 3.636363636363636, 'campus': 3.636363636363636, 'Accounting and Finance': 4.098360655737705, 'Agricultural Sciences': 0, 'Anthropology': 3.3783783783783785, 'Architecture': 0, 'Art': 0, 'Biology': 2.8089887640449436, 'Business': 4.385964912280702, 'Chemistry': 4.237288135593221, 'Communication': 5.0, 'Computer Science': 2.976190476190476, 'Criminal Justice': 0, 'Design': 0, 'Economics': 4.310344827586207, 'Education': 0, 'Engineering': 3.3333333333333335, 'English': 3.6764705882352944, 'Environment Science': 3.7878787878787876, 'Film/Photography': 0, 'History': 3.846153846153846, 'Information Technology': 0, 'International Relations': 3.90625, 'Kinesiology and Therapy': 0, 'Math': 2.7777777777777777, 'Music': 4.385964912280702, 'Nursing': 0, 'Performing Arts': 4.716981132075471, 'Philosophy': 4.310344827586207, 'Physics': 0, 'Political Science': 3.90625, 'Psychology': 3.73134328358209, 'Religious Studies': 0}, 'Brown University': {'ranking': 3.790204081632653, 'international students ratio': 2.7559561672000004, 'student faculty ratio': 3.79663198, 'class size': 4.007996192, 'party culture': 4.090909090909091, 'safety': 2.727272727272727, 'student life': 5.0, 'athletics': 3.1818181818181817, 'dorms': 3.1818181818181817, 'campus food': 3.636363636363636, 'location': 4.090909090909091, 'campus': 4.090909090909091, 'Accounting and Finance': 0, 'Agricultural Sciences': 0, 'Anthropology': 3.1645569620253164, 'Architecture': 0, 'Art': 4.545454545454545, 'Biology': 3.012048192771084, 'Business': 2.525252525252525, 'Chemistry': 2.2935779816513766, 'Communication': 4.385964912280702, 'Computer Science': 3.289473684210526, 'Criminal Justice': 0, 'Design': 0, 'Economics': 3.846153846153846, 'Education': 4.8076923076923075, 'Engineering': 3.289473684210526, 'English': 4.545454545454545, 'Environment Science': 4.032258064516129, 'Film/Photography': 0, 'History': 4.385964912280702, 'Information Technology': 0, 'International Relations': 4.62962962962963, 'Kinesiology and Therapy': 0, 'Math': 4.4642857142857135, 'Music': 0, 'Nursing': 0, 'Performing Arts': 0, 'Philosophy': 0, 'Physics': 4.385964912280702, 'Political Science': 4.098360655737705, 'Psychology': 4.310344827586207, 'Religious Studies': 0}, 'Cornell University': {'ranking': 3.790204081632653, 'international students ratio': 2.5570503688, 'student faculty ratio': 3.25545462, 'class size': 3.2546636120000003, 'party culture': 4.090909090909091, 'safety': 3.1818181818181817, 'student life': 4.545454545454545, 'athletics': 3.1818181818181817, 'dorms': 2.2727272727272725, 'campus food': 5.0, 'location': 3.636363636363636, 'campus': 4.545454545454545, 'Accounting and Finance': 4.166666666666667, 'Agricultural Sciences': 5.0, 'Anthropology': 3.5714285714285716, 'Architecture': 4.62962962962963, 'Art': 4.098360655737705, 'Biology': 4.237288135593221, 'Business': 3.90625, 'Chemistry': 3.7878787878787876, 'Communication': 3.4246575342465753, 'Computer Science': 4.310344827586207, 'Criminal Justice': 0, 'Design': 4.385964912280702, 'Economics': 3.90625, 'Education': 0, 'Engineering': 4.166666666666667, 'English': 2.976190476190476, 'Environment Science': 3.2467532467532467, 'Film/Photography': 0, 'History': 3.73134328358209, 'Information Technology': 4.901960784313726, 'International Relations': 0, 'Kinesiology and Therapy': 0, 'Math': 3.6231884057971016, 'Music': 0, 'Nursing': 0, 'Performing Arts': 0, 'Philosophy': 4.098360655737705, 'Physics': 4.310344827586207, 'Political Science': 3.0487804878048776, 'Psychology': 3.125, 'Religious Studies': 0}, 'Rice University': {'ranking': 3.790204081632653, 'international students ratio': 2.8848814408, 'student faculty ratio': 4.08234672, 'class size': 4.246995953000001, 'party culture': 4.545454545454545, 'safety': 2.2727272727272725, 'student life': 5.0, 'athletics': 4.545454545454545, 'dorms': 5.0, 'campus food': 5.0, 'location': 4.545454545454545, 'campus': 5.0, 'Accounting and Finance': 1.6891891891891893, 'Agricultural Sciences': 0, 'Anthropology': 0, 'Architecture': 5.0, 'Art': 4.8076923076923075, 'Biology': 2.7472527472527477, 'Business': 2.976190476190476, 'Chemistry': 3.3783783783783785, 'Communication': 0, 'Computer Science': 4.310344827586207, 'Criminal Justice': 0, 'Design': 0, 'Economics': 3.0487804878048776, 'Education': 0, 'Engineering': 4.545454545454545, 'English': 4.237288135593221, 'Environment Science': 0, 'Film/Photography': 0, 'History': 4.098360655737705, 'Information Technology': 0, 'International Relations': 0, 'Kinesiology and Therapy': 5.0, 'Math': 4.237288135593221, 'Music': 4.4642857142857135, 'Nursing': 0, 'Performing Arts': 0, 'Philosophy': 0, 'Physics': 0, 'Political Science': 3.73134328358209, 'Psychology': 4.545454545454545, 'Religious Studies': 0}, 'Vanderbilt University': {'ranking': 3.790204081632653, 'international students ratio': 2.0308169608, 'student faculty ratio': 3.52100128, 'class size': 3.851996348, 'party culture': 5.0, 'safety': 2.2727272727272725, 'student life': 5.0, 'athletics': 5.0, 'dorms': 3.1818181818181817, 'campus food': 5.0, 'location': 4.545454545454545, 'campus': 5.0, 'Accounting and Finance': 0, 'Agricultural Sciences': 0, 'Anthropology': 0, 'Architecture': 0, 'Art': 0, 'Biology': 3.012048192771084, 'Business': 0, 'Chemistry': 2.380952380952381, 'Communication': 4.545454545454545, 'Computer Science': 2.8089887640449436, 'Criminal Justice': 0, 'Design': 0, 'Economics': 2.525252525252525, 'Education': 5.0, 'Engineering': 3.6231884057971016, 'English': 4.310344827586207, 'Environment Science': 0, 'Film/Photography': 0, 'History': 4.237288135593221, 'Information Technology': 0, 'International Relations': 0, 'Kinesiology and Therapy': 0, 'Math': 4.166666666666667, 'Music': 4.545454545454545, 'Nursing': 0, 'Performing Arts': 0, 'Philosophy': 4.4642857142857135, 'Physics': 0, 'Political Science': 4.237288135593221, 'Psychology': 4.716981132075471, 'Religious Studies': 0}, 'University of Notre Dame': {'ranking': 3.478095238095238, 'international students ratio': 1.7899304032, 'student faculty ratio': 2.9999919999999998, 'class size': 3.3999968000000003, 'party culture': 4.090909090909091, 'safety': 2.2727272727272725, 'student life': 5.0, 'athletics': 5.0, 'dorms': 4.545454545454545, 'campus food': 4.545454545454545, 'location': 2.2727272727272725, 'campus': 5.0, 'Accounting and Finance': 4.8076923076923075, 'Agricultural Sciences': 0, 'Anthropology': 3.6231884057971016, 'Architecture': 4.8076923076923075, 'Art': 0, 'Biology': 2.212389380530974, 'Business': 3.7878787878787876, 'Chemistry': 2.2522522522522523, 'Communication': 0, 'Computer Science': 2.6595744680851063, 'Criminal Justice': 0, 'Design': 3.90625, 'Economics': 2.8089887640449436, 'Education': 0, 'Engineering': 4.032258064516129, 'English': 3.205128205128205, 'Environment Science': 0, 'Film/Photography': 0, 'History': 3.3783783783783785, 'Information Technology': 0, 'International Relations': 3.6231884057971016, 'Kinesiology and Therapy': 0, 'Math': 3.5211267605633805, 'Music': 0, 'Nursing': 0, 'Performing Arts': 3.0487804878048776, 'Philosophy': 4.166666666666667, 'Physics': 3.5211267605633805, 'Political Science': 3.5211267605633805, 'Psychology': 3.7878787878787876, 'Religious Studies': 5.0}, 'Washington University in St. Louis': {'ranking': 3.478095238095238, 'international students ratio': 2.1213964288, 'student faculty ratio': 3.52100128, 'class size': 3.7749964250000003, 'party culture': 4.090909090909091, 'safety': 3.1818181818181817, 'student life': 5.0, 'athletics': 3.636363636363636, 'dorms': 5.0, 'campus food': 5.0, 'location': 4.545454545454545, 'campus': 5.0, 'Accounting and Finance': 4.62962962962963, 'Agricultural Sciences': 0, 'Anthropology': 4.237288135593221, 'Architecture': 4.901960784313726, 'Art': 0, 'Biology': 3.7878787878787876, 'Business': 2.525252525252525, 'Chemistry': 2.976190476190476, 'Communication': 0, 'Computer Science': 2.7472527472527477, 'Criminal Justice': 0, 'Design': 4.8076923076923075, 'Economics': 3.73134328358209, 'Education': 0, 'Engineering': 3.4246575342465753, 'English': 3.3333333333333335, 'Environment Science': 4.310344827586207, 'Film/Photography': 0, 'History': 3.7878787878787876, 'Information Technology': 0, 'International Relations': 4.237288135593221, 'Kinesiology and Therapy': 0, 'Math': 3.6764705882352944, 'Music': 0, 'Nursing': 0, 'Performing Arts': 0, 'Philosophy': 0, 'Physics': 3.846153846153846, 'Political Science': 3.7878787878787876, 'Psychology': 4.4642857142857135, 'Religious Studies': 0}, 'Georgetown University': {'ranking': 3.3326530612244896, 'international students ratio': 2.8207866632000003, 'student faculty ratio': 2.75461342, 'class size': 3.4736633930000007, 'party culture': 4.545454545454545, 'safety': 2.2727272727272725, 'student life': 5.0, 'athletics': 3.636363636363636, 'dorms': 2.2727272727272725, 'campus food': 2.727272727272727, 'location': 4.545454545454545, 'campus': 2.727272727272727, 'Accounting and Finance': 4.901960784313726, 'Agricultural Sciences': 0, 'Anthropology': 0, 'Architecture': 0, 'Art': 0, 'Biology': 2.604166666666667, 'Business': 3.3783783783783785, 'Chemistry': 2.066115702479339, 'Communication': 0, 'Computer Science': 2.4038461538461537, 'Criminal Justice': 0, 'Design': 0, 'Economics': 3.7878787878787876, 'Education': 0, 'Engineering': 0, 'English': 3.5714285714285716, 'Environment Science': 0, 'Film/Photography': 0, 'History': 4.032258064516129, 'Information Technology': 0, 'International Relations': 4.716981132075471, 'Kinesiology and Therapy': 0, 'Math': 3.1645569620253164, 'Music': 0, 'Nursing': 4.8076923076923075, 'Performing Arts': 0, 'Philosophy': 4.237288135593221, 'Physics': 0, 'Political Science': 4.716981132075471, 'Psychology': 3.90625, 'Religious Studies': 0}, 'Emory University': {'ranking': 3.262585034013606, 'international students ratio': 3.5134576072, 'student faculty ratio': 3.25545462, 'class size': 3.4736633930000007, 'party culture': 3.636363636363636, 'safety': 2.727272727272727, 'student life': 4.545454545454545, 'athletics': 2.2727272727272725, 'dorms': 4.545454545454545, 'campus food': 4.545454545454545, 'location': 4.545454545454545, 'campus': 5.0, 'Accounting and Finance': 3.4722222222222223, 'Agricultural Sciences': 0, 'Anthropology': 3.7878787878787876, 'Architecture': 0, 'Art': 0, 'Biology': 3.2467532467532467, 'Business': 2.3364485981308416, 'Chemistry': 4.032258064516129, 'Communication': 0, 'Computer Science': 2.3584905660377355, 'Criminal Justice': 0, 'Design': 0, 'Economics': 3.125, 'Education': 0, 'Engineering': 0, 'English': 2.9411764705882355, 'Environment Science': 2.450980392156863, 'Film/Photography': 3.846153846153846, 'History': 2.604166666666667, 'Information Technology': 0, 'International Relations': 3.7878787878787876, 'Kinesiology and Therapy': 0, 'Math': 2.8735632183908044, 'Music': 0, 'Nursing': 4.4642857142857135, 'Performing Arts': 0, 'Philosophy': 3.73134328358209, 'Physics': 0, 'Political Science': 2.4038461538461537, 'Psychology': 2.6595744680851063, 'Religious Studies': 0}, 'University of California - Berkeley': {'ranking': 3.262585034013606, 'international students ratio': 3.0108638408000004, 'student faculty ratio': 1.3193164800000001, 'class size': 2.834664032, 'party culture': 4.545454545454545, 'safety': 1.818181818181818, 'student life': 5.0, 'athletics': 5.0, 'dorms': 1.3636363636363633, 'campus food': 4.545454545454545, 'location': 4.090909090909091, 'campus': 3.636363636363636, 'Accounting and Finance': 3.6231884057971016, 'Agricultural Sciences': 4.8076923076923075, 'Anthropology': 4.8076923076923075, 'Architecture': 4.716981132075471, 'Art': 3.0864197530864197, 'Biology': 4.62962962962963, 'Business': 4.4642857142857135, 'Chemistry': 4.8076923076923075, 'Communication': 3.1645569620253164, 'Computer Science': 4.716981132075471, 'Criminal Justice': 0, 'Design': 0, 'Economics': 4.716981132075471, 'Education': 0, 'Engineering': 3.7878787878787876, 'English': 2.604166666666667, 'Environment Science': 3.012048192771084, 'Film/Photography': 4.098360655737705, 'History': 2.9411764705882355, 'Information Technology': 0, 'International Relations': 2.9411764705882355, 'Kinesiology and Therapy': 0, 'Math': 3.3783783783783785, 'Music': 0, 'Nursing': 0, 'Performing Arts': 3.2467532467532467, 'Philosophy': 3.6231884057971016, 'Physics': 3.9682539682539684, 'Political Science': 2.8735632183908044, 'Psychology': 3.3333333333333335, 'Religious Studies': 0}, 'University of California - Los Angeles': {'ranking': 3.262585034013606, 'international students ratio': 2.8368793311999996, 'student faculty ratio': 1.49410678, 'class size': 3.182997017, 'party culture': 4.545454545454545, 'safety': 3.1818181818181817, 'student life': 5.0, 'athletics': 5.0, 'dorms': 3.636363636363636, 'campus food': 5.0, 'location': 4.545454545454545, 'campus': 5.0, 'Accounting and Finance': 3.6231884057971016, 'Agricultural Sciences': 0, 'Anthropology': 4.166666666666667, 'Architecture': 3.9682539682539684, 'Art': 4.166666666666667, 'Biology': 4.310344827586207, 'Business': 4.237288135593221, 'Chemistry': 3.73134328358209, 'Communication': 0, 'Computer Science': 4.385964912280702, 'Criminal Justice': 0, 'Design': 4.62962962962963, 'Economics': 3.846153846153846, 'Education': 0, 'Engineering': 0, 'English': 0, 'Environment Science': 3.3783783783783785, 'Film/Photography': 4.716981132075471, 'History': 3.205128205128205, 'Information Technology': 0, 'International Relations': 3.2467532467532467, 'Kinesiology and Therapy': 0, 'Math': 3.4246575342465753, 'Music': 0, 'Nursing': 3.289473684210526, 'Performing Arts': 4.166666666666667, 'Philosophy': 3.9682539682539684, 'Physics': 2.9411764705882355, 'Political Science': 2.6315789473684212, 'Psychology': 2.7777777777777777, 'Religious Studies': 0}, 'University of Southern California': {'ranking': 3.262585034013606, 'international students ratio': 3.1339033672, 'student faculty ratio': 3.52100128, 'class size': 3.3999968000000003, 'party culture': 5.0, 'safety': 3.1818181818181817, 'student life': 5.0, 'athletics': 5.0, 'dorms': 3.636363636363636, 'campus food': 4.090909090909091, 'location': 3.636363636363636, 'campus': 4.545454545454545, 'Accounting and Finance': 4.716981132075471, 'Agricultural Sciences': 0, 'Anthropology': 0, 'Architecture': 4.4642857142857135, 'Art': 4.4642857142857135, 'Biology': 3.0864197530864197, 'Business': 3.6764705882352944, 'Chemistry': 2.6315789473684212, 'Communication': 4.8076923076923075, 'Computer Science': 3.5714285714285716, 'Criminal Justice': 0, 'Design': 5.0, 'Economics': 3.5211267605633805, 'Education': 0, 'Engineering': 3.846153846153846, 'English': 4.098360655737705, 'Environment Science': 3.90625, 'Film/Photography': 5.0, 'History': 3.90625, 'Information Technology': 0, 'International Relations': 4.385964912280702, 'Kinesiology and Therapy': 4.901960784313726, 'Math': 3.2467532467532467, 'Music': 4.8076923076923075, 'Nursing': 0, 'Performing Arts': 0, 'Philosophy': 4.385964912280702, 'Physics': 0, 'Political Science': 2.717391304347826, 'Psychology': 3.6231884057971016, 'Religious Studies': 0}, 'Carnegie Mellon University': {'ranking': 3.0, 'international students ratio': 4.3153156552, 'student faculty ratio': 2.2941083800000004, 'class size': 3.9296629370000002, 'party culture': 3.636363636363636, 'safety': 2.727272727272727, 'student life': 4.545454545454545, 'athletics': 2.2727272727272725, 'dorms': 2.727272727272727, 'campus food': 2.727272727272727, 'location': 4.090909090909091, 'campus': 3.1818181818181817, 'Accounting and Finance': 3.5211267605633805, 'Agricultural Sciences': 0, 'Anthropology': 0, 'Architecture': 3.846153846153846, 'Art': 4.310344827586207, 'Biology': 2.9069767441860463, 'Business': 3.73134328358209, 'Chemistry': 3.5211267605633805, 'Communication': 0, 'Computer Science': 4.8076923076923075, 'Criminal Justice': 0, 'Design': 4.716981132075471, 'Economics': 3.2467532467532467, 'Education': 0, 'Engineering': 3.5211267605633805, 'English': 2.3364485981308416, 'Environment Science': 0, 'Film/Photography': 0, 'History': 0, 'Information Technology': 5.0, 'International Relations': 2.577319587628866, 'Kinesiology and Therapy': 0, 'Math': 3.846153846153846, 'Music': 4.032258064516129, 'Nursing': 0, 'Performing Arts': 4.310344827586207, 'Philosophy': 0, 'Physics': 3.4722222222222223, 'Political Science': 0, 'Psychology': 2.8089887640449436, 'Religious Studies': 0}, 'University of Virginia': {'ranking': 3.0, 'international students ratio': 1.5606762208, 'student faculty ratio': 1.8739395000000003, 'class size': 3.1119970880000003, 'party culture': 5.0, 'safety': 2.727272727272727, 'student life': 5.0, 'athletics': 5.0, 'dorms': 3.1818181818181817, 'campus food': 2.2727272727272725, 'location': 4.545454545454545, 'campus': 4.090909090909091, 'Accounting and Finance': 2.2935779816513766, 'Agricultural Sciences': 0, 'Anthropology': 2.9069767441860463, 'Architecture': 4.166666666666667, 'Art': 2.1929824561403506, 'Biology': 2.604166666666667, 'Business': 3.3333333333333335, 'Chemistry': 2.11864406779661, 'Communication': 0, 'Computer Science': 2.9069767441860463, 'Criminal Justice': 0, 'Design': 0, 'Economics': 3.289473684210526, 'Education': 0, 'Engineering': 2.9069767441860463, 'English': 2.577319587628866, 'Environment Science': 3.289473684210526, 'Film/Photography': 0, 'History': 2.5510204081632653, 'Information Technology': 0, 'International Relations': 3.3783783783783785, 'Kinesiology and Therapy': 4.310344827586207, 'Math': 2.4038461538461537, 'Music': 0, 'Nursing': 4.310344827586207, 'Performing Arts': 0, 'Philosophy': 3.0864197530864197, 'Physics': 3.3333333333333335, 'Political Science': 2.976190476190476, 'Psychology': 2.4752475247524752, 'Religious Studies': 0}, 'Wake Forest University': {'ranking': 2.8793197278911564, 'international students ratio': 2.3340969472, 'student faculty ratio': 2.9999919999999998, 'class size': 3.326996873, 'party culture': 4.090909090909091, 'safety': 2.727272727272727, 'student life': 5.0, 'athletics': 5.0, 'dorms': 3.1818181818181817, 'campus food': 3.636363636363636, 'location': 2.2727272727272725, 'campus': 3.636363636363636, 'Accounting and Finance': 4.4642857142857135, 'Agricultural Sciences': 0, 'Anthropology': 0, 'Architecture': 0, 'Art': 0, 'Biology': 1.968503937007874, 'Business': 2.5, 'Chemistry': 3.5714285714285716, 'Communication': 4.032258064516129, 'Computer Science': 1.7857142857142858, 'Criminal Justice': 0, 'Design': 0, 'Economics': 2.450980392156863, 'Education': 0, 'Engineering': 0, 'English': 2.2321428571428568, 'Environment Science': 0, 'Film/Photography': 0, 'History': 2.525252525252525, 'Information Technology': 0, 'International Relations': 0, 'Kinesiology and Therapy': 4.8076923076923075, 'Math': 2.1929824561403506, 'Music': 0, 'Nursing': 0, 'Performing Arts': 0, 'Philosophy': 0, 'Physics': 0, 'Political Science': 2.9411764705882355, 'Psychology': 2.604166666666667, 'Religious Studies': 0}, 'University of Michigan - Ann Arbor': {'ranking': 2.8216326530612243, 'international students ratio': 1.9759174912000002, 'student faculty ratio': 1.8739395000000003, 'class size': 3.3999968000000003, 'party culture': 5.0, 'safety': 2.727272727272727, 'student life': 5.0, 'athletics': 5.0, 'dorms': 2.727272727272727, 'campus food': 5.0, 'location': 5.0, 'campus': 5.0, 'Accounting and Finance': 0, 'Agricultural Sciences': 0, 'Anthropology': 4.4642857142857135, 'Architecture': 3.90625, 'Art': 3.90625, 'Biology': 3.5211267605633805, 'Business': 3.9682539682539684, 'Chemistry': 3.6764705882352944, 'Communication': 3.73134328358209, 'Computer Science': 3.6231884057971016, 'Criminal Justice': 0, 'Design': 0, 'Economics': 3.9682539682539684, 'Education': 4.385964912280702, 'Engineering': 4.098360655737705, 'English': 2.717391304347826, 'Environment Science': 3.73134328358209, 'Film/Photography': 4.166666666666667, 'History': 2.7777777777777777, 'Information Technology': 4.8076923076923075, 'International Relations': 3.4246575342465753, 'Kinesiology and Therapy': 4.8076923076923075, 'Math': 3.205128205128205, 'Music': 4.237288135593221, 'Nursing': 4.545454545454545, 'Performing Arts': 3.9682539682539684, 'Philosophy': 3.7878787878787876, 'Physics': 3.6231884057971016, 'Political Science': 3.1645569620253164, 'Psychology': 3.6764705882352944, 'Religious Studies': 0}, 'Tufts University': {'ranking': 2.765714285714286, 'international students ratio': 2.5906611592, 'student faculty ratio': 3.52100128, 'class size': 4.007996192, 'party culture': 3.636363636363636, 'safety': 3.1818181818181817, 'student life': 5.0, 'athletics': 3.1818181818181817, 'dorms': 2.727272727272727, 'campus food': 5.0, 'location': 4.090909090909091, 'campus': 4.545454545454545, 'Accounting and Finance': 0, 'Agricultural Sciences': 2.8089887640449436, 'Anthropology': 3.9682539682539684, 'Architecture': 0, 'Art': 3.3333333333333335, 'Biology': 2.525252525252525, 'Business': 0, 'Chemistry': 1.8382352941176472, 'Communication': 0, 'Computer Science': 2.8089887640449436, 'Criminal Justice': 0, 'Design': 0, 'Economics': 2.525252525252525, 'Education': 4.545454545454545, 'Engineering': 2.976190476190476, 'English': 3.2467532467532467, 'Environment Science': 3.205128205128205, 'Film/Photography': 0, 'History': 3.4246575342465753, 'Information Technology': 0, 'International Relations': 4.310344827586207, 'Kinesiology and Therapy': 0, 'Math': 3.125, 'Music': 0, 'Nursing': 0, 'Performing Arts': 0, 'Philosophy': 3.90625, 'Physics': 0, 'Political Science': 3.6231884057971016, 'Psychology': 3.5211267605633805, 'Religious Studies': 0}, 'New York University': {'ranking': 2.7115646258503405, 'international students ratio': 3.7182916192000004, 'student faculty ratio': 2.9999919999999998, 'class size': 3.3999968000000003, 'party culture': 5.0, 'safety': 3.636363636363636, 'student life': 4.545454545454545, 'athletics': 2.2727272727272725, 'dorms': 2.727272727272727, 'campus food': 4.545454545454545, 'location': 5.0, 'campus': 4.090909090909091, 'Accounting and Finance': 4.098360655737705, 'Agricultural Sciences': 0, 'Anthropology': 3.5211267605633805, 'Architecture': 0, 'Art': 4.237288135593221, 'Biology': 3.289473684210526, 'Business': 4.166666666666667, 'Chemistry': 2.8089887640449436, 'Communication': 4.4642857142857135, 'Computer Science': 3.73134328358209, 'Criminal Justice': 0, 'Design': 0, 'Economics': 3.90625, 'Education': 0, 'Engineering': 1.7123287671232876, 'English': 3.6231884057971016, 'Environment Science': 0, 'Film/Photography': 0, 'History': 3.0487804878048776, 'Information Technology': 0, 'International Relations': 3.205128205128205, 'Kinesiology and Therapy': 0, 'Math': 2.604166666666667, 'Music': 3.90625, 'Nursing': 4.237288135593221, 'Performing Arts': 4.62962962962963, 'Philosophy': 3.6764705882352944, 'Physics': 2.688172043010753, 'Political Science': 2.314814814814815, 'Psychology': 3.3783783783783785, 'Religious Studies': 0}, 'University of North Carolina - Chapel Hill': {'ranking': 2.7115646258503405, 'international students ratio': 1.1435485, 'student faculty ratio': 2.2941083800000004, 'class size': 2.0666648000000003, 'party culture': 5.0, 'safety': 2.2727272727272725, 'student life': 5.0, 'athletics': 5.0, 'dorms': 2.727272727272727, 'campus food': 4.090909090909091, 'location': 4.545454545454545, 'campus': 4.545454545454545, 'Accounting and Finance': 3.0487804878048776, 'Agricultural Sciences': 0, 'Anthropology': 2.9411764705882355, 'Architecture': 0, 'Art': 2.212389380530974, 'Biology': 3.1645569620253164, 'Business': 3.6764705882352944, 'Chemistry': 3.7878787878787876, 'Communication': 4.310344827586207, 'Computer Science': 3.012048192771084, 'Criminal Justice': 0, 'Design': 0, 'Economics': 2.6595744680851063, 'Education': 3.4246575342465753, 'Engineering': 1.8382352941176472, 'English': 2.1929824561403506, 'Environment Science': 3.6764705882352944, 'Film/Photography': 4.901960784313726, 'History': 2.380952380952381, 'Information Technology': 0, 'International Relations': 2.688172043010753, 'Kinesiology and Therapy': 0, 'Math': 2.976190476190476, 'Music': 0, 'Nursing': 4.098360655737705, 'Performing Arts': 2.9411764705882355, 'Philosophy': 3.1645569620253164, 'Physics': 2.840909090909091, 'Political Science': 2.3364485981308416, 'Psychology': 2.577319587628866, 'Religious Studies': 0}, 'Boston College': {'ranking': 2.6085714285714285, 'international students ratio': 1.9206041800000002, 'student faculty ratio': 2.51931888, 'class size': 2.6999975000000003, 'party culture': 4.545454545454545, 'safety': 3.1818181818181817, 'student life': 4.545454545454545, 'athletics': 5.0, 'dorms': 1.3636363636363633, 'campus food': 2.727272727272727, 'location': 4.090909090909091, 'campus': 2.727272727272727, 'Accounting and Finance': 2.4752475247524752, 'Agricultural Sciences': 0, 'Anthropology': 0, 'Architecture': 0, 'Art': 0, 'Biology': 2.2935779816513766, 'Business': 3.2467532467532467, 'Chemistry': 2.155172413793103, 'Communication': 3.5211267605633805, 'Computer Science': 2.032520325203252, 'Criminal Justice': 0, 'Design': 0, 'Economics': 3.1645569620253164, 'Education': 4.4642857142857135, 'Engineering': 0, 'English': 2.4271844660194173, 'Environment Science': 2.3364485981308416, 'Film/Photography': 3.5211267605633805, 'History': 0, 'Information Technology': 0, 'International Relations': 3.125, 'Kinesiology and Therapy': 0, 'Math': 2.717391304347826, 'Music': 0, 'Nursing': 4.032258064516129, 'Performing Arts': 0, 'Philosophy': 3.4722222222222223, 'Physics': 0, 'Political Science': 3.205128205128205, 'Psychology': 2.9069767441860463, 'Religious Studies': 0}, 'College of William & Mary': {'ranking': 2.6085714285714285, 'international students ratio': 1.82749568, 'student faculty ratio': 2.51931888, 'class size': 2.6999975000000003, 'party culture': 2.727272727272727, 'safety': 3.1818181818181817, 'student life': 4.545454545454545, 'athletics': 3.636363636363636, 'dorms': 2.2727272727272725, 'campus food': 2.727272727272727, 'location': 2.2727272727272725, 'campus': 3.1818181818181817, 'Accounting and Finance': 0, 'Agricultural Sciences': 0, 'Anthropology': 3.2467532467532467, 'Architecture': 0, 'Art': 2.2321428571428568, 'Biology': 1.7985611510791366, 'Business': 2.100840336134454, 'Chemistry': 3.6231884057971016, 'Communication': 0, 'Computer Science': 2.2321428571428568, 'Criminal Justice': 0, 'Design': 0, 'Economics': 2.2935779816513766, 'Education': 0, 'Engineering': 0, 'English': 2.380952380952381, 'Environment Science': 3.4722222222222223, 'Film/Photography': 0, 'History': 3.4722222222222223, 'Information Technology': 0, 'International Relations': 3.3333333333333335, 'Kinesiology and Therapy': 0, 'Math': 2.314814814814815, 'Music': 0, 'Nursing': 0, 'Performing Arts': 0, 'Philosophy': 3.289473684210526, 'Physics': 3.012048192771084, 'Political Science': 3.3783783783783785, 'Psychology': 2.8735632183908044, 'Religious Studies': 0}, 'Brandeis University': {'ranking': 2.5126530612244897, 'international students ratio': 4.072967036800001, 'student faculty ratio': 2.9999919999999998, 'class size': 3.547996652, 'party culture': 2.727272727272727, 'safety': 3.636363636363636, 'student life': 3.636363636363636, 'athletics': 2.2727272727272725, 'dorms': 1.3636363636363633, 'campus food': 2.727272727272727, 'location': 2.727272727272727, 'campus': 1.818181818181818, 'Accounting and Finance': 0, 'Agricultural Sciences': 0, 'Anthropology': 2.7472527472527477, 'Architecture': 0, 'Art': 0, 'Biology': 1.9841269841269842, 'Business': 1.7361111111111112, 'Chemistry': 1.937984496124031, 'Communication': 0, 'Computer Science': 1.4792899408284024, 'Criminal Justice': 0, 'Design': 0, 'Economics': 1.8518518518518516, 'Education': 0, 'Engineering': 0, 'English': 1.824817518248175, 'Environment Science': 1.7241379310344829, 'Film/Photography': 0, 'History': 1.937984496124031, 'Information Technology': 0, 'International Relations': 2.6315789473684212, 'Kinesiology and Therapy': 0, 'Math': 1.8518518518518516, 'Music': 0, 'Nursing': 0, 'Performing Arts': 0, 'Philosophy': 0, 'Physics': 0, 'Political Science': 1.5527950310559004, 'Psychology': 1.6778523489932886, 'Religious Studies': 0}, 'Georgia Institute of Technology': {'ranking': 2.5126530612244897, 'international students ratio': 2.540176, 'student faculty ratio': 0.9999880000000001, 'class size': 1.947998252, 'party culture': 4.545454545454545, 'safety': 2.727272727272727, 'student life': 5.0, 'athletics': 5.0, 'dorms': 2.2727272727272725, 'campus food': 2.727272727272727, 'location': 4.090909090909091, 'campus': 4.090909090909091, 'Accounting and Finance': 2.9069767441860463, 'Agricultural Sciences': 0, 'Anthropology': 0, 'Architecture': 3.73134328358209, 'Art': 0, 'Biology': 2.6595744680851063, 'Business': 3.1645569620253164, 'Chemistry': 3.846153846153846, 'Communication': 2.9069767441860463, 'Computer Science': 4.385964912280702, 'Criminal Justice': 0, 'Design': 3.4722222222222223, 'Economics': 2.4038461538461537, 'Education': 0, 'Engineering': 4.716981132075471, 'English': 0, 'Environment Science': 0, 'Film/Photography': 0, 'History': 0, 'Information Technology': 0, 'International Relations': 2.3584905660377355, 'Kinesiology and Therapy': 0, 'Math': 2.450980392156863, 'Music': 0, 'Nursing': 0, 'Performing Arts': 0, 'Philosophy': 0, 'Physics': 3.7878787878787876, 'Political Science': 0, 'Psychology': 1.953125, 'Religious Studies': 0}, 'University of Rochester': {'ranking': 2.5126530612244897, 'international students ratio': 4.096921523200001, 'student faculty ratio': 2.9999919999999998, 'class size': 4.166662700000001, 'party culture': 3.1818181818181817, 'safety': 2.727272727272727, 'student life': 3.636363636363636, 'athletics': 2.727272727272727, 'dorms': 2.727272727272727, 'campus food': 2.727272727272727, 'location': 2.2727272727272725, 'campus': 3.1818181818181817, 'Accounting and Finance': 2.840909090909091, 'Agricultural Sciences': 0, 'Anthropology': 0, 'Architecture': 0, 'Art': 0, 'Biology': 2.2321428571428568, 'Business': 2.2935779816513766, 'Chemistry': 2.1367521367521367, 'Communication': 2.2321428571428568, 'Computer Science': 2.2935779816513766, 'Criminal Justice': 0, 'Design': 0, 'Economics': 2.1367521367521367, 'Education': 4.098360655737705, 'Engineering': 2.5, 'English': 1.9841269841269842, 'Environment Science': 1.7361111111111112, 'Film/Photography': 0, 'History': 2.0, 'Information Technology': 0, 'International Relations': 2.717391304347826, 'Kinesiology and Therapy': 0, 'Math': 2.840909090909091, 'Music': 3.9682539682539684, 'Nursing': 3.9682539682539684, 'Performing Arts': 0, 'Philosophy': 0, 'Physics': 3.0487804878048776, 'Political Science': 1.7985611510791366, 'Psychology': 2.5510204081632653, 'Religious Studies': 0}, 'Boston University': {'ranking': 2.3820408163265303, 'international students ratio': 4.2253834567999995, 'student faculty ratio': 2.9999919999999998, 'class size': 3.4736633930000007, 'party culture': 4.545454545454545, 'safety': 2.2727272727272725, 'student life': 4.545454545454545, 'athletics': 4.090909090909091, 'dorms': 2.2727272727272725, 'campus food': 5.0, 'location': 4.545454545454545, 'campus': 4.090909090909091, 'Accounting and Finance': 2.8089887640449436, 'Agricultural Sciences': 0, 'Anthropology': 3.0864197530864197, 'Architecture': 0, 'Art': 2.2727272727272725, 'Biology': 2.8089887640449436, 'Business': 3.012048192771084, 'Chemistry': 3.125, 'Communication': 4.237288135593221, 'Computer Science': 3.0487804878048776, 'Criminal Justice': 0, 'Design': 3.0487804878048776, 'Economics': 3.4246575342465753, 'Education': 3.9682539682539684, 'Engineering': 2.2321428571428568, 'English': 2.0161290322580645, 'Environment Science': 0, 'Film/Photography': 0, 'History': 2.032520325203252, 'Information Technology': 0, 'International Relations': 2.7777777777777777, 'Kinesiology and Therapy': 4.545454545454545, 'Math': 1.8115942028985508, 'Music': 3.4246575342465753, 'Nursing': 0, 'Performing Arts': 3.90625, 'Philosophy': 0, 'Physics': 2.4038461538461537, 'Political Science': 2.1367521367521367, 'Psychology': 2.1367521367521367, 'Religious Studies': 0}, 'Case Western Reserve University': {'ranking': 2.3820408163265303, 'international students ratio': 2.9324697088, 'student faculty ratio': 2.75461342, 'class size': 3.3999968000000003, 'party culture': 3.1818181818181817, 'safety': 2.727272727272727, 'student life': 4.090909090909091, 'athletics': 2.2727272727272725, 'dorms': 1.3636363636363633, 'campus food': 2.727272727272727, 'location': 3.1818181818181817, 'campus': 2.727272727272727, 'Accounting and Finance': 2.100840336134454, 'Agricultural Sciences': 0, 'Anthropology': 2.8089887640449436, 'Architecture': 0, 'Art': 0, 'Biology': 2.4752475247524752, 'Business': 2.11864406779661, 'Chemistry': 3.4246575342465753, 'Communication': 0, 'Computer Science': 1.8382352941176472, 'Criminal Justice': 0, 'Design': 0, 'Economics': 1.7730496453900708, 'Education': 0, 'Engineering': 2.8735632183908044, 'English': 0, 'Environment Science': 0, 'Film/Photography': 0, 'History': 1.7857142857142858, 'Information Technology': 0, 'International Relations': 1.9841269841269842, 'Kinesiology and Therapy': 0, 'Math': 2.3364485981308416, 'Music': 0, 'Nursing': 4.166666666666667, 'Performing Arts': 0, 'Philosophy': 0, 'Physics': 3.125, 'Political Science': 1.5151515151515151, 'Psychology': 2.0491803278688523, 'Religious Studies': 0}, 'University of California - Santa Barbara': {'ranking': 2.3820408163265303, 'international students ratio': 2.2639324928000004, 'student faculty ratio': 1.49410678, 'class size': 2.633664233, 'party culture': 5.0, 'safety': 2.2727272727272725, 'student life': 5.0, 'athletics': 3.636363636363636, 'dorms': 3.636363636363636, 'campus food': 4.545454545454545, 'location': 4.090909090909091, 'campus': 4.545454545454545, 'Accounting and Finance': 2.066115702479339, 'Agricultural Sciences': 0, 'Anthropology': 3.012048192771084, 'Architecture': 0, 'Art': 2.11864406779661, 'Biology': 2.1929824561403506, 'Business': 0, 'Chemistry': 3.3783783783783785, 'Communication': 3.289473684210526, 'Computer Science': 3.3783783783783785, 'Criminal Justice': 0, 'Design': 0, 'Economics': 2.8089887640449436, 'Education': 0, 'Engineering': 2.1367521367521367, 'English': 2.066115702479339, 'Environment Science': 3.125, 'Film/Photography': 3.205128205128205, 'History': 2.066115702479339, 'Information Technology': 0, 'International Relations': 2.604166666666667, 'Kinesiology and Therapy': 0, 'Math': 1.937984496124031, 'Music': 0, 'Nursing': 0, 'Performing Arts': 3.3333333333333335, 'Philosophy': 3.205128205128205, 'Physics': 2.7777777777777777, 'Political Science': 1.9083969465648853, 'Psychology': 1.8796992481203008, 'Religious Studies': 0}, 'Northeastern University': {'ranking': 2.2673469387755096, 'international students ratio': 3.9876778888, 'student faculty ratio': 2.0789819200000004, 'class size': 4.007996192, 'party culture': 4.090909090909091, 'safety': 2.2727272727272725, 'student life': 4.545454545454545, 'athletics': 3.636363636363636, 'dorms': 2.727272727272727, 'campus food': 4.545454545454545, 'location': 4.545454545454545, 'campus': 4.545454545454545, 'Accounting and Finance': 0, 'Agricultural Sciences': 0, 'Anthropology': 0, 'Architecture': 4.098360655737705, 'Art': 2.6315789473684212, 'Biology': 2.066115702479339, 'Business': 2.314814814814815, 'Chemistry': 2.2522522522522523, 'Communication': 4.098360655737705, 'Computer Science': 2.525252525252525, 'Criminal Justice': 4.901960784313726, 'Design': 4.310344827586207, 'Economics': 2.2727272727272725, 'Education': 0, 'Engineering': 3.2467532467532467, 'English': 2.2522522522522523, 'Environment Science': 3.3333333333333335, 'Film/Photography': 0, 'History': 2.2935779816513766, 'Information Technology': 0, 'International Relations': 3.4722222222222223, 'Kinesiology and Therapy': 4.62962962962963, 'Math': 2.525252525252525, 'Music': 0, 'Nursing': 4.385964912280702, 'Performing Arts': 0, 'Philosophy': 0, 'Physics': 0, 'Political Science': 2.2321428571428568, 'Psychology': 2.7472527472527477, 'Religious Studies': 0}, 'Tulane University': {'ranking': 2.2673469387755096, 'international students ratio': 1.3447097799999999, 'student faculty ratio': 3.52100128, 'class size': 3.547996652, 'party culture': 5.0, 'safety': 1.818181818181818, 'student life': 5.0, 'athletics': 4.090909090909091, 'dorms': 2.2727272727272725, 'campus food': 3.1818181818181817, 'location': 4.545454545454545, 'campus': 3.636363636363636, 'Accounting and Finance': 2.8089887640449436, 'Agricultural Sciences': 0, 'Anthropology': 2.4752475247524752, 'Architecture': 4.310344827586207, 'Art': 0, 'Biology': 1.8518518518518516, 'Business': 1.7985611510791366, 'Chemistry': 0, 'Communication': 3.6231884057971016, 'Computer Science': 2.032520325203252, 'Criminal Justice': 0, 'Design': 0, 'Economics': 1.6778523489932886, 'Education': 0, 'Engineering': 1.7361111111111112, 'English': 2.2727272727272725, 'Environment Science': 2.7472527472527477, 'Film/Photography': 0, 'History': 2.2522522522522523, 'Information Technology': 0, 'International Relations': 2.9069767441860463, 'Kinesiology and Therapy': 0, 'Math': 1.8939393939393938, 'Music': 0, 'Nursing': 0, 'Performing Arts': 0, 'Philosophy': 3.2467532467532467, 'Physics': 0, 'Political Science': 2.3584905660377355, 'Psychology': 2.4271844660194173, 'Religious Studies': 0}, 'Rensselaer Polytechnic Institute': {'ranking': 2.199727891156463, 'international students ratio': 2.7722327648, 'student faculty ratio': 2.2941083800000004, 'class size': 2.902997297, 'party culture': 4.090909090909091, 'safety': 3.1818181818181817, 'student life': 4.545454545454545, 'athletics': 2.727272727272727, 'dorms': 2.2727272727272725, 'campus food': 2.2727272727272725, 'location': 1.818181818181818, 'campus': 2.727272727272727, 'Accounting and Finance': 0, 'Agricultural Sciences': 0, 'Anthropology': 0, 'Architecture': 3.7878787878787876, 'Art': 0, 'Biology': 1.4792899408284024, 'Business': 2.155172413793103, 'Chemistry': 2.1367521367521367, 'Communication': 0, 'Computer Science': 3.4246575342465753, 'Criminal Justice': 0, 'Design': 3.3333333333333335, 'Economics': 0, 'Education': 0, 'Engineering': 3.0487804878048776, 'English': 0, 'Environment Science': 0, 'Film/Photography': 0, 'History': 0, 'Information Technology': 0, 'International Relations': 0, 'Kinesiology and Therapy': 0, 'Math': 2.3584905660377355, 'Music': 0, 'Nursing': 0, 'Performing Arts': 0, 'Philosophy': 0, 'Physics': 3.6764705882352944, 'Political Science': 0, 'Psychology': 0, 'Religious Studies': 0}, 'University of California - Irvine': {'ranking': 2.199727891156463, 'international students ratio': 3.4994341472, 'student faculty ratio': 1.3193164800000001, 'class size': 3.182997017, 'party culture': 2.727272727272727, 'safety': 3.1818181818181817, 'student life': 3.636363636363636, 'athletics': 3.1818181818181817, 'dorms': 3.1818181818181817, 'campus food': 3.636363636363636, 'location': 3.1818181818181817, 'campus': 4.090909090909091, 'Accounting and Finance': 0, 'Agricultural Sciences': 0, 'Anthropology': 2.2522522522522523, 'Architecture': 0, 'Art': 1.2690355329949239, 'Biology': 1.6891891891891893, 'Business': 2.5510204081632653, 'Chemistry': 2.9411764705882355, 'Communication': 0.8278145695364237, 'Computer Science': 3.4246575342465753, 'Criminal Justice': 4.166666666666667, 'Design': 1.7123287671232876, 'Economics': 2.7472527472527477, 'Education': 1.0204081632653061, 'Engineering': 1.4367816091954022, 'English': 1.3227513227513226, 'Environment Science': 1.0917030567685588, 'Film/Photography': 0, 'History': 1.25, 'Information Technology': 2.9411764705882355, 'International Relations': 0, 'Kinesiology and Therapy': 0, 'Math': 1.25, 'Music': 0, 'Nursing': 0.8561643835616438, 'Performing Arts': 2.688172043010753, 'Philosophy': 2.7472527472527477, 'Physics': 0, 'Political Science': 0.9765625000000001, 'Psychology': 1.5151515151515151, 'Religious Studies': 0}, 'University of California - San Diego': {'ranking': 2.199727891156463, 'international students ratio': 3.9253775968000006, 'student faculty ratio': 1.1546102200000001, 'class size': 1.8896649770000002, 'party culture': 2.727272727272727, 'safety': 2.727272727272727, 'student life': 3.1818181818181817, 'athletics': 3.1818181818181817, 'dorms': 1.818181818181818, 'campus food': 3.636363636363636, 'location': 3.1818181818181817, 'campus': 2.727272727272727, 'Accounting and Finance': 2.976190476190476, 'Agricultural Sciences': 0, 'Anthropology': 2.604166666666667, 'Architecture': 0, 'Art': 1.8382352941176472, 'Biology': 4.032258064516129, 'Business': 2.5510204081632653, 'Chemistry': 3.6231884057971016, 'Communication': 2.4271844660194173, 'Computer Science': 3.6231884057971016, 'Criminal Justice': 0, 'Design': 0, 'Economics': 3.846153846153846, 'Education': 0, 'Engineering': 2.2727272727272725, 'English': 1.3089005235602096, 'Environment Science': 2.1929824561403506, 'Film/Photography': 0, 'History': 1.4792899408284024, 'Information Technology': 0, 'International Relations': 2.0491803278688523, 'Kinesiology and Therapy': 0, 'Math': 2.0491803278688523, 'Music': 0, 'Nursing': 0, 'Performing Arts': 2.2727272727272725, 'Philosophy': 0, 'Physics': 2.5, 'Political Science': 1.7857142857142858, 'Psychology': 2.032520325203252, 'Religious Studies': 0}, 'University of Florida': {'ranking': 2.199727891156463, 'international students ratio': 0.9999996511999999, 'student faculty ratio': 0.9999880000000001, 'class size': 2.567997632, 'party culture': 5.0, 'safety': 2.727272727272727, 'student life': 5.0, 'athletics': 5.0, 'dorms': 2.727272727272727, 'campus food': 3.636363636363636, 'location': 4.090909090909091, 'campus': 4.545454545454545, 'Accounting and Finance': 2.8735632183908044, 'Agricultural Sciences': 4.032258064516129, 'Anthropology': 2.6315789473684212, 'Architecture': 3.012048192771084, 'Art': 2.2522522522522523, 'Biology': 2.976190476190476, 'Business': 2.840909090909091, 'Chemistry': 2.717391304347826, 'Communication': 3.6764705882352944, 'Computer Science': 2.8089887640449436, 'Criminal Justice': 4.237288135593221, 'Design': 3.012048192771084, 'Economics': 2.8089887640449436, 'Education': 3.3333333333333335, 'Engineering': 2.9411764705882355, 'English': 1.4792899408284024, 'Environment Science': 2.6595744680851063, 'Film/Photography': 0, 'History': 1.6778523489932886, 'Information Technology': 0, 'International Relations': 2.314814814814815, 'Kinesiology and Therapy': 0, 'Math': 1.8796992481203008, 'Music': 0, 'Nursing': 3.3333333333333335, 'Performing Arts': 2.4038461538461537, 'Philosophy': 2.688172043010753, 'Physics': 2.577319587628866, 'Political Science': 1.968503937007874, 'Psychology': 2.173913043478261, 'Religious Studies': 0}, 'Lehigh University': {'ranking': 2.085714285714286, 'international students ratio': 2.2639324928000004, 'student faculty ratio': 3.25545462, 'class size': 2.6999975000000003, 'party culture': 5.0, 'safety': 2.727272727272727, 'student life': 4.545454545454545, 'athletics': 3.1818181818181817, 'dorms': 2.727272727272727, 'campus food': 2.727272727272727, 'location': 2.727272727272727, 'campus': 3.1818181818181817, 'Accounting and Finance': 2.100840336134454, 'Agricultural Sciences': 0, 'Anthropology': 0, 'Architecture': 0, 'Art': 0, 'Biology': 1.4792899408284024, 'Business': 1.937984496124031, 'Chemistry': 2.032520325203252, 'Communication': 2.717391304347826, 'Computer Science': 1.923076923076923, 'Criminal Justice': 0, 'Design': 0, 'Economics': 1.6778523489932886, 'Education': 0, 'Engineering': 2.6315789473684212, 'English': 1.968503937007874, 'Environment Science': 2.0, 'Film/Photography': 0, 'History': 0, 'Information Technology': 4.4642857142857135, 'International Relations': 2.8735632183908044, 'Kinesiology and Therapy': 0, 'Math': 0, 'Music': 0, 'Nursing': 0, 'Performing Arts': 0, 'Philosophy': 0, 'Physics': 0, 'Political Science': 1.953125, 'Psychology': 1.7605633802816902, 'Religious Studies': 0}, 'Pepperdine University': {'ranking': 2.085714285714286, 'international students ratio': 2.6573309512, 'student faculty ratio': 2.0789819200000004, 'class size': 4.166662700000001, 'party culture': 2.2727272727272725, 'safety': 3.636363636363636, 'student life': 3.1818181818181817, 'athletics': 3.1818181818181817, 'dorms': 3.1818181818181817, 'campus food': 3.1818181818181817, 'location': 2.2727272727272725, 'campus': 3.636363636363636, 'Accounting and Finance': 1.7985611510791366, 'Agricultural Sciences': 0, 'Anthropology': 0, 'Architecture': 0, 'Art': 0, 'Biology': 1.0964912280701753, 'Business': 1.923076923076923, 'Chemistry': 0, 'Communication': 3.5714285714285716, 'Computer Science': 1.4792899408284024, 'Criminal Justice': 0, 'Design': 0, 'Economics': 1.6666666666666667, 'Education': 0, 'Engineering': 0, 'English': 1.8115942028985508, 'Environment Science': 0, 'Film/Photography': 0, 'History': 1.644736842105263, 'Information Technology': 0, 'International Relations': 2.525252525252525, 'Kinesiology and Therapy': 3.846153846153846, 'Math': 0, 'Music': 0, 'Nursing': 0, 'Performing Arts': 0, 'Philosophy': 0, 'Physics': 0, 'Political Science': 1.644736842105263, 'Psychology': 2.314814814814815, 'Religious Studies': 0}, 'University of California - Davis': {'ranking': 2.085714285714286, 'international students ratio': 3.0881084128, 'student faculty ratio': 0.9999880000000001, 'class size': 1.947998252, 'party culture': 3.636363636363636, 'safety': 2.727272727272727, 'student life': 4.545454545454545, 'athletics': 4.090909090909091, 'dorms': 3.636363636363636, 'campus food': 5.0, 'location': 4.090909090909091, 'campus': 4.545454545454545, 'Accounting and Finance': 2.840909090909091, 'Agricultural Sciences': 4.901960784313726, 'Anthropology': 2.840909090909091, 'Architecture': 0, 'Art': 2.100840336134454, 'Biology': 3.5714285714285716, 'Business': 2.5510204081632653, 'Chemistry': 3.3333333333333335, 'Communication': 2.840909090909091, 'Computer Science': 2.8089887640449436, 'Criminal Justice': 0, 'Design': 2.155172413793103, 'Economics': 3.0864197530864197, 'Education': 0, 'Engineering': 1.8796992481203008, 'English': 1.6339869281045751, 'Environment Science': 2.7777777777777777, 'Film/Photography': 2.6595744680851063, 'History': 1.6666666666666667, 'Information Technology': 0, 'International Relations': 2.0, 'Kinesiology and Therapy': 0, 'Math': 1.6891891891891893, 'Music': 0, 'Nursing': 0, 'Performing Arts': 1.8796992481203008, 'Philosophy': 2.976190476190476, 'Physics': 2.450980392156863, 'Political Science': 1.5625, 'Psychology': 1.8115942028985508, 'Religious Studies': 0}, 'University of Miami': {'ranking': 2.085714285714286, 'international students ratio': 3.1642034248, 'student faculty ratio': 2.51931888, 'class size': 3.041663825, 'party culture': 5.0, 'safety': 2.727272727272727, 'student life': 5.0, 'athletics': 5.0, 'dorms': 2.2727272727272725, 'campus food': 2.2727272727272725, 'location': 4.545454545454545, 'campus': 3.636363636363636, 'Accounting and Finance': 2.155172413793103, 'Agricultural Sciences': 0, 'Anthropology': 2.4752475247524752, 'Architecture': 3.6764705882352944, 'Art': 1.9841269841269842, 'Biology': 2.380952380952381, 'Business': 2.2935779816513766, 'Chemistry': 2.6315789473684212, 'Communication': 2.314814814814815, 'Computer Science': 1.7241379310344829, 'Criminal Justice': 4.8076923076923075, 'Design': 0, 'Economics': 2.0491803278688523, 'Education': 3.5211267605633805, 'Engineering': 1.937984496124031, 'English': 1.7241379310344829, 'Environment Science': 2.8089887640449436, 'Film/Photography': 3.6231884057971016, 'History': 1.923076923076923, 'Information Technology': 0, 'International Relations': 2.2935779816513766, 'Kinesiology and Therapy': 4.4642857142857135, 'Math': 1.923076923076923, 'Music': 3.5211267605633805, 'Nursing': 3.5714285714285716, 'Performing Arts': 3.4246575342465753, 'Philosophy': 0, 'Physics': 0, 'Political Science': 1.6556291390728477, 'Psychology': 2.100840336134454, 'Religious Studies': 0}, 'University of Wisconsin-Madison': {'ranking': 2.085714285714286, 'international students ratio': 2.2462764232, 'student faculty ratio': 1.3193164800000001, 'class size': 2.311997888, 'party culture': 5.0, 'safety': 2.727272727272727, 'student life': 5.0, 'athletics': 5.0, 'dorms': 3.1818181818181817, 'campus food': 4.545454545454545, 'location': 4.545454545454545, 'campus': 4.545454545454545, 'Accounting and Finance': 3.6231884057971016, 'Agricultural Sciences': 4.716981132075471, 'Anthropology': 3.0864197530864197, 'Architecture': 0, 'Art': 2.032520325203252, 'Biology': 3.4246575342465753, 'Business': 3.3783783783783785, 'Chemistry': 3.3783783783783785, 'Communication': 3.90625, 'Computer Science': 3.4722222222222223, 'Criminal Justice': 0, 'Design': 2.8089887640449436, 'Economics': 3.4722222222222223, 'Education': 4.166666666666667, 'Engineering': 2.7472527472527477, 'English': 1.6025641025641024, 'Environment Science': 3.846153846153846, 'Film/Photography': 0, 'History': 1.8939393939393938, 'Information Technology': 0, 'International Relations': 2.4271844660194173, 'Kinesiology and Therapy': 4.032258064516129, 'Math': 2.6595744680851063, 'Music': 0, 'Nursing': 3.6231884057971016, 'Performing Arts': 2.6315789473684212, 'Philosophy': 3.012048192771084, 'Physics': 2.8089887640449436, 'Political Science': 2.212389380530974, 'Psychology': 2.2935779816513766, 'Religious Studies': 0}, 'Villanova University': {'ranking': 2.085714285714286, 'international students ratio': 0.93778898, 'student faculty ratio': 2.51931888, 'class size': 2.1879980120000004, 'party culture': 3.636363636363636, 'safety': 3.1818181818181817, 'student life': 4.090909090909091, 'athletics': 5.0, 'dorms': 2.727272727272727, 'campus food': 3.636363636363636, 'location': 4.090909090909091, 'campus': 3.1818181818181817, 'Accounting and Finance': 2.3584905660377355, 'Agricultural Sciences': 0, 'Anthropology': 0, 'Architecture': 0, 'Art': 0, 'Biology': 1.6778523489932886, 'Business': 1.6778523489932886, 'Chemistry': 0, 'Communication': 3.3333333333333335, 'Computer Science': 1.5625, 'Criminal Justice': 0, 'Design': 0, 'Economics': 2.525252525252525, 'Education': 0, 'Engineering': 2.2522522522522523, 'English': 1.7985611510791366, 'Environment Science': 1.5432098765432098, 'Film/Photography': 0, 'History': 0, 'Information Technology': 0, 'International Relations': 0, 'Kinesiology and Therapy': 0, 'Math': 1.6025641025641024, 'Music': 0, 'Nursing': 3.90625, 'Performing Arts': 0, 'Philosophy': 0, 'Physics': 0, 'Political Science': 2.2522522522522523, 'Psychology': 1.7482517482517481, 'Religious Studies': 0}, 'Pennsylvania State University': {'ranking': 1.9677551020408162, 'international students ratio': 2.62408802, 'student faculty ratio': 1.6789811200000002, 'class size': 2.0666648000000003, 'party culture': 5.0, 'safety': 2.727272727272727, 'student life': 5.0, 'athletics': 5.0, 'dorms': 2.2727272727272725, 'campus food': 4.090909090909091, 'location': 4.545454545454545, 'campus': 4.545454545454545, 'Accounting and Finance': 3.3333333333333335, 'Agricultural Sciences': 4.310344827586207, 'Anthropology': 2.5510204081632653, 'Architecture': 3.3333333333333335, 'Art': 1.7006802721088436, 'Biology': 2.314814814814815, 'Business': 3.012048192771084, 'Chemistry': 3.4246575342465753, 'Communication': 2.9411764705882355, 'Computer Science': 3.125, 'Criminal Justice': 4.62962962962963, 'Design': 3.125, 'Economics': 3.289473684210526, 'Education': 3.3783783783783785, 'Engineering': 2.4752475247524752, 'English': 1.4880952380952381, 'Environment Science': 2.5, 'Film/Photography': 2.380952380952381, 'History': 1.4044943820224718, 'Information Technology': 0, 'International Relations': 0, 'Kinesiology and Therapy': 4.385964912280702, 'Math': 1.7605633802816902, 'Music': 0, 'Nursing': 2.9069767441860463, 'Performing Arts': 3.0864197530864197, 'Philosophy': 2.7777777777777777, 'Physics': 0, 'Political Science': 1.2690355329949239, 'Psychology': 1.3966480446927374, 'Religious Studies': 0}, 'University of Illinois - Urbana-Champaign': {'ranking': 1.9677551020408162, 'international students ratio': 3.3855911007999997, 'student faculty ratio': 0.9999880000000001, 'class size': 2.0666648000000003, 'party culture': 5.0, 'safety': 2.727272727272727, 'student life': 5.0, 'athletics': 5.0, 'dorms': 2.727272727272727, 'campus food': 4.090909090909091, 'location': 3.1818181818181817, 'campus': 4.545454545454545, 'Accounting and Finance': 4.310344827586207, 'Agricultural Sciences': 4.716981132075471, 'Anthropology': 2.066115702479339, 'Architecture': 3.125, 'Art': 0, 'Biology': 3.012048192771084, 'Business': 2.840909090909091, 'Chemistry': 3.846153846153846, 'Communication': 3.012048192771084, 'Computer Science': 4.4642857142857135, 'Criminal Justice': 0, 'Design': 2.2321428571428568, 'Economics': 2.8735632183908044, 'Education': 3.73134328358209, 'Engineering': 3.6764705882352944, 'English': 1.3888888888888888, 'Environment Science': 2.066115702479339, 'Film/Photography': 0, 'History': 1.231527093596059, 'Information Technology': 0, 'International Relations': 0, 'Kinesiology and Therapy': 2.0, 'Math': 2.2935779816513766, 'Music': 2.577319587628866, 'Nursing': 0, 'Performing Arts': 2.032520325203252, 'Philosophy': 0, 'Physics': 3.205128205128205, 'Political Science': 1.7361111111111112, 'Psychology': 2.066115702479339, 'Religious Studies': 0}, 'Ohio State University': {'ranking': 1.942585034013605, 'international students ratio': 2.0853025888000003, 'student faculty ratio': 1.1546102200000001, 'class size': 1.4999987, 'party culture': 5.0, 'safety': 2.2727272727272725, 'student life': 5.0, 'athletics': 5.0, 'dorms': 2.727272727272727, 'campus food': 4.545454545454545, 'location': 4.545454545454545, 'campus': 4.545454545454545, 'Accounting and Finance': 3.4722222222222223, 'Agricultural Sciences': 4.166666666666667, 'Anthropology': 2.9411764705882355, 'Architecture': 3.0487804878048776, 'Art': 1.6556291390728477, 'Biology': 2.840909090909091, 'Business': 2.8735632183908044, 'Chemistry': 3.0864197530864197, 'Communication': 3.0487804878048776, 'Computer Science': 2.9411764705882355, 'Criminal Justice': 3.7878787878787876, 'Design': 2.6315789473684212, 'Economics': 2.8735632183908044, 'Education': 3.4722222222222223, 'Engineering': 2.8089887640449436, 'English': 1.5432098765432098, 'Environment Science': 2.100840336134454, 'Film/Photography': 2.2935779816513766, 'History': 1.4619883040935673, 'Information Technology': 0, 'International Relations': 0, 'Kinesiology and Therapy': 3.012048192771084, 'Math': 1.7361111111111112, 'Music': 3.0487804878048776, 'Nursing': 3.4246575342465753, 'Performing Arts': 1.824817518248175, 'Philosophy': 0, 'Physics': 2.2935779816513766, 'Political Science': 1.7730496453900708, 'Psychology': 2.11864406779661, 'Religious Studies': 1.937984496124031}};

}//data = dict(schoolData)

var sliderValues = document.getElementsByClassName("sliderValue");
var sliders = document.getElementsByClassName("slider");
var allCheckBoxes = document.getElementsByClassName('schoolCheckBoxes');
var allMajorSelectBoxes = document.getElementsByClassName('majorSelectBox');
var previousDisplayArray = [];

for (var i = 0; i < sliderValues.length; i++) {
    sliders[i].addEventListener('input', updateSliderValueText, false);
}

function updateSliderValueText(event) {
  var sliderValue = event.target.value;
  event.target.nextElementSibling.innerHTML = '' + sliderValue;
};

updateSelectList();
function updateSelectList() {

  // console.log(allMajorSelectBoxes);
  for(var major of dataMajor){
    for (var majorSelectBox of allMajorSelectBoxes){
      var newHTML = '' + '<option value="';
      newHTML += major;
      newHTML += '">';
      newHTML += major;
      newHTML += '</option>'
      majorSelectBox.innerHTML += newHTML;
    }
  }
}


document.getElementById("updateButton").addEventListener('click', function(){handleUpdate(false)}, false); //the reason for calling the update function twice is that: when called the first time, in an attempt to "remember" previous checkboxes, the program could not properly sort the results according to the descending order. Thus a second call is needed to correct the entry order for stacked bar chart.
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}
handleUpdate(true);
function handleUpdate(toReset) {
  // console.log("updating");
  // if(!toReset){
  //   if(justReset) {
  //     checkedBoxes = ['Princeton University', 'Harvard University', 'University of Chicago', 'Yale University', 'Columbia University'];
  //     justReset = false;
  //   }else{
  //     checkedBoxes = checkedSchoolNames();
  //   }
  // }

  if(!justReset) {
    checkedBoxes = checkedSchoolNames();
  }

  // justReset = false;
  // console.log(justReset);
  var weightDict = getSliderWeights();
  // console.log(weightDict);
  var outputArray1 = calculateOutputArray(weightDict); //returns [[calcualtedRanking, name],[calcualtedRanking, name],[calcualtedRanking, name]] in ascending order by calculatedRanking
  displayCharts(weightDict, toReset);
  displaySchools(outputArray1);
}

function displayCharts(weightDict, toReset) {

  displayPieChart(weightDict);
  displayStackedBarChart(weightDict, toReset);

  document.getElementsByClassName('canvasjs-chart-credit').remove();
}


function displayStackedBarChart(weightDict, toReset){
  if(isInitialState(weightDict)){
    document.getElementById("stackedBarContainer").innerHTML = '';
    return;
  }
  var chartParameter = {
    animationEnabled: true,

    backgroundColor: "transparent",
    title:{
      text: "School Score Breakdown",
      horizontalAlign: "left",
      fontSize: 24
    },

    axisX: {
      labelFontSize: 10,
      interval: 1,
      // interval: 0

    },
    axisY: {
      // prefix: "$"
    },
    // legend:{
		//     cursor: "pointer",
		//     itemclick: toggleDataSeries
	  // },∆∆
    toolTip: {
      enabled:false,
    },
    legend:{
    },
    dataPointWidth: 11,
    data: [ ]
  }
  var schoolScoreDictDetailed = calculateSchoolScoreDictDetailed(weightDict);  //to be {princeton: {ranking: 50, ...}, harvard: {}, rice: {}, ...}
  // console.log(schoolScoreDictDetailed);

  var outputA = calculateOutputArray(weightDict);
  if(!toReset){
    // console.log('in');
    checkedBoxes = checkedSchoolNames(outputA);
  }
  // console.log(checkedBoxes);
  var schoolScoreDict = calculateSchoolScoreDict(weightDict);
  checkedBoxes.sort(function(a,b){ //to be sorted [[score, name],[score, name],[score, name],...]
    return schoolScoreDict[b] - schoolScoreDict[a];
  });
  // console.log(schoolScoreDict);
  // console.log(checkedBoxes);
  for (var sliderTerm in weightDict) {
    if(parseFloat(weightDict[sliderTerm]) != 0) {
      var termDict = {};
      termDict['type'] = "stackedBar";
      termDict['name'] = sliderTerm;
      termDict['showInLegend'] = 'true';
      termDict['legendMarkerColor'] = getTermColor(sliderTerm);
      // termDict['color'] = 'black';
      dataPoints = [];


      var schoolNames = checkedBoxes;
      // var schoolNames = checkedSchoolNames([]);


      for (var schoolName of schoolNames) {
        var pointDict = {};
        pointDict['label'] = schoolName;

        pointDict['y'] = schoolScoreDictDetailed[schoolName][sliderTerm];

        var termColor = getTermColor(sliderTerm);
        pointDict['color'] = termColor;

        // console.log(sliderTerm, schoolName, pointDict['y']);
        dataPoints.push(pointDict);
      }
      // console.log("Data Points(before sort): ", sliderTerm, dataPoints);
      dataPoints.reverse(); //to make the highest score the uppermost
      // console.log("Data Points(after sort): ", sliderTerm, dataPoints);

      termDict['dataPoints'] = dataPoints;
      chartParameter['data'].push(termDict);
    }

  }
  // console.log(chartParameter);
  document.getElementById('stackedBarContainer').style.height = '' + (100 + checkedBoxes.length * 24) + 'px'
  var chart = new CanvasJS.Chart("stackedBarContainer", chartParameter);
  chart.render();
}

function getTermColor(term){
  var termColorDict = {'ranking':"#4F81BC",
    'international students ratio':"#C0504E",
    'student faculty ratio':"#9ABB58",
    'class size':"#23BFAA",
    'party culture':"#8063A1",
    'safety':"#4BACC5",
    'student life': "#F79747",
    'athletics':"#7F6084",
    'dorms':"#77A034",
    'campus food':"#34558B",
    'location':"#E59566",
    'campus':"#4F81BB"
  }

  return termColorDict[term];
}

function checkedSchoolNames(rankingArray) {  //the first ten in the school list
  if(justReset == true) {
    var firstFiveArray = [];
    for (var i = 0; i < 5; i++) {
      firstFiveArray.push(rankingArray[i][1]);
    }
    justReset = false;
    // checkedBoxes = firstFiveArray;
    return firstFiveArray;

  }
  var checkedSchoolNameArray = [];
  // console.log(allCheckBoxes);
  for (checkBox of allCheckBoxes) {
    if(checkBox.checked == true) {
      checkedSchoolNameArray.push(checkBox.dataset['name']);
    }
  }
  // console.log('here',checkedSchoolNameArray);
  return checkedSchoolNameArray;
}

function displayPieChart(weightDict) {
  if(isInitialState(weightDict)){
    document.getElementById("doughnutContainer").innerHTML = '';
    return;
  }
  var chartParameter = {
    animationEnabled: true,
    backgroundColor: "transparent",
    title:{
      text: "Slider Weights",
      horizontalAlign: "left",
      fontSize: 24
    },
    data: [{
      type: "doughnut",
      startAngle: 60,
      //innerRadius: 60,
      indexLabelFontSize: 13,
      showInLegend: true,
      legendMarkerType: "square",
      indexLabel: "{label} - #percent%",
      toolTipContent: "<b>{label}:</b> {y} (#percent%)",
      dataPoints: [
        { y: 67, label: "Inbox" },
        { y: 28, label: "Archives" },
        { y: 10, label: "Labels" },
        { y: 7, label: "Drafts"},
        { y: 15, label: "Trash"},
        { y: 6, label: "Spam"}
      ]
    }]
  };

  var dataPoints = [];
  for (var sliderTerm in weightDict) {
    if(parseFloat(weightDict[sliderTerm]) != 0) {
      var pointDict = {};
      pointDict['y'] = parseFloat(weightDict[sliderTerm]);
      pointDict['label'] = sliderTerm;
      pointDict['name'] = sliderTerm;
      pointDict['color'] = getTermColor(sliderTerm);
      // console.log(pointDict);
      dataPoints.push(pointDict);
      // var pointDict = '{';
      // pointDict += 'y: ';
      // pointDict += weightDict[sliderTerm];
      // pointDict += ', label: ';
      // pointDict += '"';
      // pointDict += sliderTerm + '"}';
      //
      // dataPoints += pointDict + ',';
    }

  }
  // dataPoints.rstrip(',');
  // dataPoints += ']'
  // dataPoints = dataPoints.replace(/,]/, ']'); //strip ',' in the end
  // console.log(dataPoints);
  chartParameter['data'][0]['dataPoints'] = dataPoints;

  // console.log(chartParameter);
  var chart = new CanvasJS.Chart("doughnutContainer", chartParameter);
  chart.render();

}

function isInitialState(weightDict){
  isInitial = true;
  for (key in weightDict) {
    if (parseFloat(weightDict[key]) != 0) {
      isInitial = false;
    }
  }
  return isInitial;
}

function calculateSchoolScoreDict(weightDict) {
  var schoolScoreDict = {}; //to be {princeton: 230, harvard: 250, rice:128, ...}
  var schoolScoreDictDetailed = calculateSchoolScoreDictDetailed(weightDict); // to be {princeton: {ranking: 50, ...}, harvard: {}, rice: {}, ...}
  for (var key in schoolScoreDictDetailed) {
    schoolScoreDict[key] = 0;
    for(var term in schoolScoreDictDetailed[key]) {
      schoolScoreDict[key] += parseFloat(schoolScoreDictDetailed[key][term]);
    }
  }
  return schoolScoreDict;
}
function calculateSchoolScoreDictDetailed(weightDict){ // to be {princeton: {ranking: 50, ...}, harvard: {}, rice: {}, ...}
  // console.log(weightDict);
  var schoolScoreDictDetailed = {};
  for (var key in data) {
    schoolScoreDictDetailed[key] = {};
    for (var term in data[key]){
      if(Object.keys(weightDict).includes(term)){
        var termScore = parseFloat(data[key][term]) * parseFloat(weightDict[term]);
        schoolScoreDictDetailed[key][term] = termScore;
      }
    }
  }
  // console.log('schoolScoreDictDetailed :',schoolScoreDictDetailed);
  return schoolScoreDictDetailed;
}

function calculateOutputArray(weightDict) {  //[[score, name],[score, name],[score, name],...]
  if(isInitialState(weightDict)){
    return [];
  }
  var schoolScoreDict = calculateSchoolScoreDict(weightDict);
  console.log(schoolScoreDict);
  var schoolScoreArray = []; //to be [[calcualtedScore, name],[calcualtedScore, name],[calcualtedScore, name]] in descending order by calculatedScore
  for (var key in schoolScoreDict) { // to be unsorted [[score, name],[score, name],[score, name],...]
    // console.log(schoolScoreDict[key]);
    var arrayToAdd = [schoolScoreDict[key], key];
    // console.log(arrayToAdd);
    schoolScoreArray.push(arrayToAdd);
    // console.log(outputArray);
  }


  // console.log(schoolScoreArray);

  schoolScoreArray.sort(function(a,b){ //to be sorted [[score, name],[score, name],[score, name],...]
    return b[0] - a[0];
  });
  // console.log('school score array:', schoolScoreArray);

  var outputArray = [];
  // var schoolScoreArrayCopy = schoolScoreArray; //a copy of array which keeps the raw scores while sArray is being modified to hold rankings
  for (var i = 0; i < schoolScoreArray.length; i++) { // to be [[ranking, name], [ranking, name], [ranking, name],...]
    outputArray.push([]);
    outputArray[i][1] = schoolScoreArray[i][1];
    if (i == 0){
      outputArray[i][0] = 1;
    }else{
      if(schoolScoreArray[i][0] == schoolScoreArray[i-1][0]){
        outputArray[i][0] = outputArray[i-1][0];
      }else{
        outputArray[i][0] = i + 1;
      }
    }
  }
  // console.log(outputArray);$
  return outputArray; //[[1, name], [2, name], [3, name],...]
}
function displaySchools(displayArray) {
  // console.log("displaying",'pr:', previousRanking, 'pDA: ', previousDisplayArray, 'DA: ', displayArray);
  // if(displayArray.length==previousDisplayArray.length && displayArray.every(function(v,i) { return v[0] === previousDisplayArray[i][0] && v[1] === previousDisplayArray[i][1]})){
  //   console.log('display function not executed');
  //   return;
  // }

  list = document.getElementById('collegeList');
  // console.log(displayArray);
  if(displayArray.length == 0){
    // console.log("done");
    list.innerHTML = "<div id=\" downLeftNote \" style=\"font-size: 19px;color: black;font-family: sans-serif;font-weight: 500;\">Adjust the control panel to the right and click \"update\" to see customized college ranking and statistics.</div>"

    return;
  }

  // console.log('in');
  outputHTML = '';
  outputHTML += '<ul>';
  // console.log(displayArray);
  var tempRanking = [];
  // console.log(displayArray);
  for (var i = 0; i < displayArray.length; i++){

    // console.log(schoolArray);
    link = '' + 'https://collegefork.com/dive/colleges/';
    // console.log(displayArray[i][1]);
    schoolName = displayArray[i][1].replace(/ /g, '-');
    schoolName = schoolName.replace(/---/g, '-');
    link += schoolName;
    // outputHTML += '<a target="_blank" href=' + link + '>';

    // outputHTML += '<input type="checkbox" class="schoolCheckBoxes" id="';
    // outputHTML += schoolName + '"';
    // if(checkedBoxes.includes(displayArray[i][1])) {
    //   outputHTML += 'checked = "true"';
    // }
    // outputHTML += 'data-name="'
    // outputHTML += displayArray[i][1] + '"';
    // outputHTML += '>';

    outputHTML += '<li style="display: flex; flex-direction:row">';

    outputHTML += '<span class="checkBoxSpan" style="">'
    outputHTML += '<input type="checkbox" class="schoolCheckBoxes" id="';
    outputHTML += schoolName + '"';
    if(checkedBoxes.includes(displayArray[i][1])) {
      outputHTML += 'checked = "true"';
    }
    outputHTML += 'data-name="'
    outputHTML += displayArray[i][1] + '"';
    outputHTML += '>';
    outputHTML += '</span>';

    outputHTML += '<a style="flex-grow:200" target="_blank" href=' + link + '>';
    outputHTML += '<div class="schoolNameDiv" style="display:inline">';
    outputHTML += displayArray[i][0];
    outputHTML += ' : ';
    outputHTML += '<span class="schoolLink">'
    outputHTML += displayArray[i][1];
    outputHTML += '</span>';
    if(Object.keys(previousRanking).length != 0 && previousDisplayArray.length != 0) {
      // console.log("in");
      // console.log("adding delta");
      var previousRankingOfThisSchool = previousRanking[displayArray[i][1]];
      var currentRankingOfThisSchool = displayArray[i][0];
      outputHTML += '&nbsp&nbsp';
      var rankingDeltaToAppend = '';
      // console.log('school:', displayArray[i][1], 'previousRanking: ', previousRankingOfThisSchool, 'current ranking: ', currentRankingOfThisSchool, previousRankingOfThisSchool - currentRankingOfThisSchool);
      if(previousRankingOfThisSchool > currentRankingOfThisSchool){
        rankingDeltaToAppend += '<span style="color: red; font-size:12px;">' + '↑'+ (previousRankingOfThisSchool - currentRankingOfThisSchool)  + '</span>';
      }else if (currentRankingOfThisSchool > previousRankingOfThisSchool) {
        // alert("in");
        rankingDeltaToAppend += '<span style="color: green; font-size:12px;">' + '↓' + (currentRankingOfThisSchool - previousRankingOfThisSchool) + '</span>';
      }else {
        rankingDeltaToAppend += '----';
      }
      // console.log(rankingDeltaToAppend);
      outputHTML += rankingDeltaToAppend;
    }
    outputHTML += '</div>';
    outputHTML += '</a>';
    outputHTML += '</li>';
    // outputHTML += '</a>';


    tempRanking[displayArray[i][1]] = displayArray[i][0];
  }
  outputHTML += '</ul>'
  previousRanking = tempRanking;
  previousDisplayArray = displayArray;
  // console.log("previousRanking, previousDisplayArray changed");
  list.innerHTML = outputHTML;
  document.getElementById('collegeList').style.border = '2px lightblue solid';
  for (var i = 0; i < Object.keys(data).length; i++) {
    allCheckBoxes[i].addEventListener('change', handleCheckBoxChange, false);
  }
}

function handleCheckBoxChange(event) {
  // console.log('handling check box change');

  displayStackedBarChart(getSliderWeights());
  document.getElementsByClassName('canvasjs-chart-credit').remove();
}

function getSliderWeights(){  //this automatically makes ranking.weight minimum 0.01
  var weightDict = {};
  for (var term of dataGeneralSliderNameArray){
    weightDict[term] = 0;
  }

  for (var key in weightDict) {
    var sliderID = '' + 'range-';
    var wordsArray = key.split(' ');
    for (var i = 0; i < wordsArray.length; i++){
      if(i == 0) {
        sliderID += wordsArray[0];
        // console.log(sliderID);
      }else{
        // console.log(wordsArray[i].charAt(0).toUpperCase() + wordsArray[i].slice(1));
        sliderID += wordsArray[i].charAt(0).toUpperCase() + wordsArray[i].slice(1);
        // console.log(sliderID);
      }
    }
    // console.log(sliderID);

    weightDict[key] = document.getElementById(sliderID).value;
  }
  // if(weightDict['ranking'] == 0) {
  //   weightDict['ranking'] = 0.01;
  // }
  for(var selectBox of allMajorSelectBoxes){
    if(selectBox.value != "None"){
      if(selectBox.id == 'firstMajor'){
        weightDict[selectBox.value] = document.getElementById("majorRangeFirst").value;
      }else if (selectBox.id == 'secondMajor') {
        weightDict[selectBox.value] = document.getElementById("majorRangeSecond").value;
      }else if (selectBox.id == 'thirdMajor') {
        weightDict[selectBox.value] = document.getElementById("majorRangeThird").value;
      }
    }
  }
  // console.log(weightDict);
  return weightDict;
}

document.getElementById("resetButton").addEventListener('click', handleReset, false);

function handleReset() {
  // document.getElementById('downMiddlePart').style.height = '600px';
  document.getElementById('collegeList').style.border = '';


  for (var i=0; i < sliderValues.length; i++) {
    sliders[i].attributes[0].ownerElement.value = 0;
    sliders[i].attributes[0].ownerElement.nextElementSibling.innerHTML = "0"
  }

  for(var selectBox of allMajorSelectBoxes){
    selectBox.value = "None";
  }
  var majorRangeFirst = document.getElementById("majorRangeFirst");
  majorRangeFirst.value = "200";
  majorRangeFirst.nextElementSibling.innerHTML = "200";
  var majorRangeSecond = document.getElementById("majorRangeSecond");
  majorRangeSecond.value = "100";
  majorRangeSecond.nextElementSibling.innerHTML = "100";
  var majorRangeThird = document.getElementById("majorRangeThird");
  majorRangeThird.value = "50";
  majorRangeThird.nextElementSibling.innerHTML = "50";

  checkedBoxes = [];
  justReset = true;
  handleUpdate(true);
  previousRanking = {};
  previousDisplayArray = [];


}
