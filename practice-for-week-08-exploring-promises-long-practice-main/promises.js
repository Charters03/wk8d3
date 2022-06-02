/* ============================== Phase 1 ============================== */
/* -------------------------- exploring async -------------------------- */

function num1() {
    return 1;
}
async function num2() {
    setTimeout(() => {
    return 2 + 6;
 }, 5000)
}

// console.log('num1', num1());
// console.log('num2', num2());

num2()
    // .then(data => {return data + 3})
    // .then(result => console.log(result, 'phase 1'))

/* ============================== Phase 2 ============================== */
/* -------------------------- exploring await -------------------------- */

async function awaiting() {
    const wait = await num2();
    console.log('anything')
    console.log("awaiting", wait);
    console.log('after wait')


}


awaiting();



/* ============================== Phase 3 ============================== */
/* --------------------- creating a custom Promise --------------------- */

// Your code here



/* ============================== Phase 4 ============================== */
/* -------------------------- exploring then --------------------------- */

// Your code here



/* ============================== Phase 5 ============================== */
/* ------------------- turn setTimeout into a Promise ------------------ */

// Your code here



/* ============================== Phase 6 ============================== */
/* -------------------- exploring reject and .catch -------------------- */

// Your code here



/* ============================== Phase 7 ============================== */
/* ---------------- exploring async/await and try/catch ---------------- */

// Your code here



/* ============================== Phase 8 ============================== */
/* -------------------- Promises are asynchronous! --------------------- */

// Your code here
