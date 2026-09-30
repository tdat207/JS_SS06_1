let code = "";
let check = false;
let menu = 0;

do {
  let text =
    "=== QUAN LY BAN LE PHU KIEN GYM ===\n" +
    "1. Nhap va chuan hoa ma don hang\n" +
    "2. Tinh tien va in hoa don phu kien\n" +
    "3. Thoat chuong trinh\n" +
    "Nhap lua chon cua ban (1-3):";

  let input = prompt(text);
  menu = input !== null ? Number(input.trim()) : 3;

  switch (menu) {
    case 1: {
      code = "";
      check = false;

      let str = prompt("Nhap ma don hang:");
      if (str === null || str.trim() === "") {
        console.log("Loi: chua nhap ma");
        break;
      }

      str = str.trim().toUpperCase();

      if (str.length < 8) {
        console.log("Loi: ma phai tu 8 ky tu");
      } else if (!str.startsWith("GYM-")) {
        console.log("Loi: phai bat dau bang GYM-");
      } else {
        code = str;
        check = true;
        console.log("Nhap ma thanh cong: " + code);
      }
      break;
    }

    case 2: {
      if (!check) {
        console.log("Loi: chua co ma, chon 1 truoc");
        break;
      }

      let item = "";
      let price = 0;

      if (code.slice(4, 10) === "SHAKER") {
        item = "Binh lac";
        price = 120000;
      } else if (code.slice(4, 10) === "GLOVES") {
        item = "Gang tay";
        price = 180000;
      } else if (code.slice(4, 9) === "STRAP") {
        item = "Day keo lung";
        price = 150000;
      } else {
        console.log("Loi: khong tim thay mon nay");
        break;
      }

      let vip = false;
      if (code.endsWith("-VIP")) {
        vip = true;
      }

      let sale = 0;
      if (vip) {
        sale = Math.round(price * 0.1);
      }
      let total = price - sale;

      let line = "-".repeat(40);
      console.log(line);
      console.log("HOA DON BAN LE PHU KIEN GYM");
      console.log(line);
      console.log("Ma don hang : " + code);
      console.log("Ten mon     : " + item);
      console.log("Don gia     : " + String(price).padStart(10) + " VND");
      console.log("Giam gia VIP: " + String(sale).padStart(10) + " VND");
      console.log(line);
      console.log("TONG TIEN   : " + String(total).padStart(10) + " VND");
      console.log(line);

      code = "";
      check = false;
      break;
    }

    case 3: {
      console.log("Tam biet");
      break;
    }

    default: {
      console.log("Loi: nhap sai roi, chi chon 1 den 3");
      break;
    }
  }
} while (menu !== 3);

/*
em lam the nay:
dung vong lap do while de hien menu lien tuc, ai bam 3 thi moi dung lai
chon 1 thi dung trim xoa dau cach voi toUpperCase viet hoa, xong check do dai voi startsWith
chon 2 thi dung slice cat lay chu xem la binh lac hay gang tay, neu duoi co chu -VIP thi tru 10%
dung repeat voi padStart de in hoa don cho no thang hang

test 1 don dung the vip:
nhap "  gym-shaker-vip  "
may luu thanh GYM-SHAKER-VIP
in ra binh lac 120000 giam 12000 con 108000

test 2 don sai:
nhap "gym-abc"
may bao loi vi ngan hon 8 chu
chon 2 thi may bao loi chua co ma

test 3 thoat:
bam 3 may in tam biet roi tat luon
*/