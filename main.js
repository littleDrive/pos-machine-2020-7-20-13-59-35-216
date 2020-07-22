const database = [
    {
       barcode: 'ITEM000000',
       name: 'Coca-Cola',
       price: 3
     },
     {
       barcode: 'ITEM000001',
       name: 'Sprite',
       price: 3
     },
     {
       barcode: 'ITEM000002',
       name: 'Apple',
       price: 5
     },
     {
       barcode: 'ITEM000003',
       name: 'Litchi',
       price: 15
     },
     {
       barcode: 'ITEM000004',
       name: 'Battery',
       price: 2
     },
     {
       barcode: 'ITEM000005',
       name: 'Instant Noodles',
       price: 4
     }
 ]
 

function printReceipt(barcodes) {
//     console.log(`
// ***<store earning no money>Receipt ***
// Name: Coca-Cola, Quantity: 5, Unit price: 3 (yuan), Subtotal: 15 (yuan)
// Name: Sprite, Quantity: 2, Unit price: 3 (yuan), Subtotal: 6 (yuan)
// Name: Battery, Quantity: 1, Unit price: 2 (yuan), Subtotal: 2 (yuan)
// ----------------------
// Total: 23 (yuan)
// **********************`)
    let newBarcodes = countSameBarcodes(barcodes);
    let items = convertBarcodesIntoItems(newBarcodes);
    let total = 0;
    let receipt = "";
    if (items.length > 0) {
        // to do
        // for (let i = 0; i < items.length; i++) {
        //     total += items[i]['quantity'] * items[i]['price'] ;
        // }
        total = getTotal(items);
        receipt = createReceits(items);
    }

    let output = '\n***<store earning no money>Receipt ***\n'
        + receipt 
        + '\n----------------------\n' 
        + 'Total: ' + total + ' (yuan)\n'
        + '**********************';
    console.log(output);
}

function countSameBarcodes(barcodes) {
    let newBarcodes={};
    for (let i = 0; i < barcodes.length; i++) {
        if (barcodes[i] in newBarcodes) {
            newBarcodes[barcodes[i]] ++;
        } else {
            newBarcodes[barcodes[i]]=1;
        }
    }
    return newBarcodes;
}

function convertBarcodesIntoItems(newBarcodes){
    let items = [];
    for (let barcode in newBarcodes) {
        for (let i = 0; i < database.length; i++) {
            let item = database[i];
            if (item['barcode'] == barcode) {
                item['quantity'] = newBarcodes[barcode];
                items.push(item);
            }
        }
    }
    return items;
}

function getTotal (items) {
    let total;
    for (let i = 0; i < items.length; i++) {
        total += items[i]['quantity'] * items[i]['price'] ;
    }
    return total;
}

function createReceits(items) {
    let receits = "";
    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        receits += 'Name: ' + item['name'] + ', Quantity: ' + item['quantity'] + ', Unit price: ' 
            + item['price'] + ' (yuan), Subtotal: ' + item['quantity'] * item['price'] + ' (yuan)';
        if (i < items.length - 1) {
            receits += '\n';
        }
    }
    return receits;
}

module.exports = {
    printReceipt
};