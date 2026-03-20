const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = 'public/images/funcionalidades';

function walkPath(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = dir + '/' + file;
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walkPath(file));
        } else {
            if (file.match(/\.(jpg|jpeg|png)$/i)) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walkPath(dir);

Promise.all(files.map(async file => {
    const newFile = file.replace(/\.(jpeg|jpg|png)$/i, '.webp');
    if (!fs.existsSync(newFile)) {
        await sharp(file).webp({ quality: 80 }).toFile(newFile);
        console.log('Converted', file, 'to', newFile);
        // fs.unlinkSync(file); // keeping original just in case, or remove if wanted.
    }
}))
.then(() => console.log('ALL DONE'))
.catch(err => console.error(err));
