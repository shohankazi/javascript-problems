//  একটা কোড লিখে ৫৮ থেকে ৯৮ পর্যন্ত যত সংখ্যা আছে সেগুলাকে দেখাও 

for (let i = 58;  i <=98 ; i++) {
    console.log(i);
}
// একটা কোড লিখে ৪১২ থেকে ৪৫৬ পর্যন্ত যত জোর সংখ্যা আছে সেগুলাকে দেখাও 

for ( let i = 412; i <= 456 ; i+=2){
    console.log(i);
}
// একটা কোড লিখে ৫৮১ থেকে ৬২৩ পর্যন্ত যত বিজোড় সংখ্যা আছে সেগুলাকে দেখাও 

for ( let i = 581; i <= 623 ; i+=2){
    console.log(i);
}

//  তুমি এতদিন যা যা জিনিস শিখছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা for লুপ দিয়ে সেই array এর সব উপাদান কে আউটপুট হিসেবে দেখাও। 

var learnings = ['array','even-odd','for loop','while loop','addition','subtraction','multiplication','division','remainder']
console.log(learnings);

//  তুমি এতদিন পর্যন্ত যে যে মডেলের মোবাইল ফোন ইউজ করেছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা for লুপ দিয়ে সেই array এর উপাদান গুলা একটা একটা করে আউটপুট হিসেবে দেখাও

var mobiles =  ['nokia','samsung','redmi','lava'];
for (let i = 0; i < mobiles.length; i++) {
    const mobile = mobiles[i];
    console.log(mobile);
}

// একটা ফর লুপ চালাও। ৩০ থেকে ৮৬ পর্যন্ত। আর এই লুপ ৪৪ এ গেলে ব্রেক করবে। সেই জিনিস কোড করে দেখাও 

for (let i = 30;  i <=86 ; i++) {
        if ( i > 44) {
            break;
        }
        console.log(i);
    }

// তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো। যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না।

var mobiles =  [100,200,300,400,500,600];
for (let i = 0; i < mobiles.length; i++) {
    const mobile = mobiles[i];
    if (mobile < 200) {
        continue;
    }
    console.log(mobile);
}