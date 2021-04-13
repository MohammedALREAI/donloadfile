const download = require('download')

const res=[
  'https://ttab-reading-room.uspto.gov/cms/rest//legal-proceeding/91248764/decision/OPP_19.pdf',
  'https://ttab-reading-room.uspto.gov/cms/rest//legal-proceeding/88434221/decision/EXA_12.pdf',
  'https://ttab-reading-room.uspto.gov/cms/rest//legal-proceeding/87819480/decision/EXA_17.pdf',
  'https://ttab-reading-room.uspto.gov/cms/rest//legal-proceeding/91224310/decision/OPP_72.pdf',
  'https://ttab-reading-room.uspto.gov/cms/rest//legal-proceeding/88450936/decision/EXA_10.pdf',
  'https://ttab-reading-room.uspto.gov/cms/rest//legal-proceeding/79250686/decision/EXA_8.pdf',
  'https://ttab-reading-room.uspto.gov/cms/rest//legal-proceeding/88380496/decision/EXA_20.pdf',
  'https://ttab-reading-room.uspto.gov/cms/rest//legal-proceeding/87444846/decision/EXA_11.pdf',
  'https://ttab-reading-room.uspto.gov/cms/rest//legal-proceeding/87445801/decision/EXA_10.pdf',
  'https://ttab-reading-room.uspto.gov/cms/rest//legal-proceeding/88111432/decision/EXA_11.pdf',
  'https://ttab-reading-room.uspto.gov/cms/rest//legal-proceeding/88355889/decision/EXA_11.pdf',
  'https://ttab-reading-room.uspto.gov/cms/rest//legal-proceeding/88414408/decision/EXA_10.pdf',
  'https://ttab-reading-room.uspto.gov/cms/rest//legal-proceeding/91240097/decision/OPP_79.pdf',
  'https://ttab-reading-room.uspto.gov/cms/rest//legal-proceeding/79210110/decision/EXA_23.pdf',
  'https://ttab-reading-room.uspto.gov/cms/rest//legal-proceeding/91246293/decision/OPP_24.pdf',
  'https://ttab-reading-room.uspto.gov/cms/rest//legal-proceeding/91239697/decision/OPP_65.pdf',
  'https://ttab-reading-room.uspto.gov/cms/rest//legal-proceeding/88480628/decision/EXA_12.pdf',
  'https://ttab-reading-room.uspto.gov/cms/rest//legal-proceeding/87614036/decision/EXA_17.pdf',
  'https://ttab-reading-room.uspto.gov/cms/rest//legal-proceeding/87614019/decision/EXA_18.pdf',
  'https://ttab-reading-room.uspto.gov/cms/rest//legal-proceeding/87843998/decision/EXA_10.pdf',
  'https://ttab-reading-room.uspto.gov/cms/rest//legal-proceeding/88055727/decision/EXA_8.pdf',
  'https://ttab-reading-room.uspto.gov/cms/rest//legal-proceeding/87753964/decision/EXA_19.pdf',
  'https://ttab-reading-room.uspto.gov/cms/rest//legal-proceeding/88371629/decision/EXA_10.pdf',
  'https://ttab-reading-room.uspto.gov/cms/rest//legal-proceeding/91239701/decision/OPP_24.pdf',
  'https://ttab-reading-room.uspto.gov/cms/rest//legal-proceeding/92069595/decision/CAN_8.pdf',
];


async function run() {
  console.log('Downloading file')
  try {
  res.map(async(x)=>{
    await download(x, 'server')
    console.log('Download done')

  })
  } catch (e) {
    console.log('Download failed')
    console.log(e.message)
  }
}

run()