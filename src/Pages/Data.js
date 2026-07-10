const warehouseData = [
  // ================= Warehouse 1 =================
  { name: 'K.Karthik', warehouse: 1, role: 'Manager', mail: 'Karthik@gmail.com', mobile: 9898989898, salary: 3000000 },
  { name: 'K.Rashi', warehouse: 1, role: 'Supervisor', mail: 'Rashi@gmail.com', mobile: 9797979797, salary: 1500000 },
  { name: 'K.Kreethi', warehouse: 1, role: 'Inventory Controller', mail: 'Kreethi@gmail.com', mobile: 9696969696, salary: 1200000 },
  { name: 'A.Ramesh', warehouse: 1, role: 'QC Inspector', mail: 'Ramesh@gmail.com', mobile: 9688888888, salary: 900000 },
  { name: 'A.Suresh', warehouse: 1, role: 'Safety Officer', mail: 'Suresh@gmail.com', mobile: 9677777777, salary: 850000 },

  // Pickers (5)
  { name: 'Picker1_W1', warehouse: 1, role: 'Picker', mail: 'p1w1@gmail.com', mobile: 9600000001, salary: 500000 },
  { name: 'Picker2_W1', warehouse: 1, role: 'Picker', mail: 'p2w1@gmail.com', mobile: 9600000002, salary: 500000 },
  { name: 'Picker3_W1', warehouse: 1, role: 'Picker', mail: 'p3w1@gmail.com', mobile: 9600000003, salary: 500000 },
  { name: 'Picker4_W1', warehouse: 1, role: 'Picker', mail: 'p4w1@gmail.com', mobile: 9600000004, salary: 500000 },
  { name: 'Picker5_W1', warehouse: 1, role: 'Picker', mail: 'p5w1@gmail.com', mobile: 9600000005, salary: 500000 },

  // Packers (5)
  { name: 'Packer1_W1', warehouse: 1, role: 'Packer', mail: 'pk1w1@gmail.com', mobile: 9610000001, salary: 480000 },
  { name: 'Packer2_W1', warehouse: 1, role: 'Packer', mail: 'pk2w1@gmail.com', mobile: 9610000002, salary: 480000 },
  { name: 'Packer3_W1', warehouse: 1, role: 'Packer', mail: 'pk3w1@gmail.com', mobile: 9610000003, salary: 480000 },
  { name: 'Packer4_W1', warehouse: 1, role: 'Packer', mail: 'pk4w1@gmail.com', mobile: 9610000004, salary: 480000 },
  { name: 'Packer5_W1', warehouse: 1, role: 'Packer', mail: 'pk5w1@gmail.com', mobile: 9610000005, salary: 480000 },

  // ================= Warehouse 2 =================
  { name: 'S.Arjun', warehouse: 2, role: 'Manager', mail: 'Arjun@gmail.com', mobile: 9595959595, salary: 2800000 },
  { name: 'S.Meena', warehouse: 2, role: 'Supervisor', mail: 'Meena@gmail.com', mobile: 9494949494, salary: 1400000 },
  { name: 'S.Rohit', warehouse: 2, role: 'Inventory Controller', mail: 'Rohit@gmail.com', mobile: 9393939393, salary: 1100000 },

  // Pickers (5)
  { name: 'Picker1_W2', warehouse: 2, role: 'Picker', mail: 'p1w2@gmail.com', mobile: 9500000001, salary: 500000 },
  { name: 'Picker2_W2', warehouse: 2, role: 'Picker', mail: 'p2w2@gmail.com', mobile: 9500000002, salary: 500000 },
  { name: 'Picker3_W2', warehouse: 2, role: 'Picker', mail: 'p3w2@gmail.com', mobile: 9500000003, salary: 500000 },
  { name: 'Picker4_W2', warehouse: 2, role: 'Picker', mail: 'p4w2@gmail.com', mobile: 9500000004, salary: 500000 },
  { name: 'Picker5_W2', warehouse: 2, role: 'Picker', mail: 'p5w2@gmail.com', mobile: 9500000005, salary: 500000 },

  // Packers (5)
  { name: 'Packer1_W2', warehouse: 2, role: 'Packer', mail: 'pk1w2@gmail.com', mobile: 9510000001, salary: 480000 },
  { name: 'Packer2_W2', warehouse: 2, role: 'Packer', mail: 'pk2w2@gmail.com', mobile: 9510000002, salary: 480000 },
  { name: 'Packer3_W2', warehouse: 2, role: 'Packer', mail: 'pk3w2@gmail.com', mobile: 9510000003, salary: 480000 },
  { name: 'Packer4_W2', warehouse: 2, role: 'Packer', mail: 'pk4w2@gmail.com', mobile: 9510000004, salary: 480000 },
  { name: 'Packer5_W2', warehouse: 2, role: 'Packer', mail: 'pk5w2@gmail.com', mobile: 9510000005, salary: 480000 },

  // ================= Warehouse 3 =================
  { name: 'P.Vikram', warehouse: 3, role: 'Manager', mail: 'Vikram@gmail.com', mobile: 9292929292, salary: 2900000 },
  { name: 'P.Anitha', warehouse: 3, role: 'Supervisor', mail: 'Anitha@gmail.com', mobile: 9191919191, salary: 1450000 },
  { name: 'P.Sneha', warehouse: 3, role: 'Inventory Controller', mail: 'Sneha@gmail.com', mobile: 9090909090, salary: 1150000 },

  // Pickers (5)
  { name: 'Picker1_W3', warehouse: 3, role: 'Picker', mail: 'p1w3@gmail.com', mobile: 9400000001, salary: 500000 },
  { name: 'Picker2_W3', warehouse: 3, role: 'Picker', mail: 'p2w3@gmail.com', mobile: 9400000002, salary: 500000 },
  { name: 'Picker3_W3', warehouse: 3, role: 'Picker', mail: 'p3w3@gmail.com', mobile: 9400000003, salary: 500000 },
  { name: 'Picker4_W3', warehouse: 3, role: 'Picker', mail: 'p4w3@gmail.com', mobile: 9400000004, salary: 500000 },
  { name: 'Picker5_W3', warehouse: 3, role: 'Picker', mail: 'p5w3@gmail.com', mobile: 9400000005, salary: 500000 },

  // Packers (5)
  { name: 'Packer1_W3', warehouse: 3, role: 'Packer', mail: 'pk1w3@gmail.com', mobile: 9410000001, salary: 480000 },
  { name: 'Packer2_W3', warehouse: 3, role: 'Packer', mail: 'pk2w3@gmail.com', mobile: 9410000002, salary: 480000 },
  { name: 'Packer3_W3', warehouse: 3, role: 'Packer', mail: 'pk3w3@gmail.com', mobile: 9410000003, salary: 480000 },
  { name: 'Packer4_W3', warehouse: 3, role: 'Packer', mail: 'pk4w3@gmail.com', mobile: 9410000004, salary: 480000 },
  { name: 'Packer5_W3', warehouse: 3, role: 'Packer', mail: 'pk5w3@gmail.com', mobile: 9410000005, salary: 480000 }
];
function salarycalc(salary){
    let s=salary;
    if(s>=100000){
        return (s/100000).toFixed(s%100000===0?0:1)+' LPA';
    }
    if(s>=1000){
        return (s/1000).toFixed(s%1000===0?0:1)+' KPA';
    }
    return s.toString();
};
const uniqueroles=[...new Set(warehouseData.map(item=>item.role))]
const uniquewarehouse=[...new Set(warehouseData.map(item=>item.warehouse.toString()))]
export {warehouseData,salarycalc,uniqueroles,uniquewarehouse};