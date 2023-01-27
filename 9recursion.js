function recurr(no) {
    let i = no * 2;
    console.log(i);

    if (i < 9999) {
        recurr(i);
    }
}

recurr(2);