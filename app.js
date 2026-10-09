/**
 * Tamil Nadu Bye-Election 2026 Live Dashboard
 * Multi-Constituency Live Counting (101 - Dharapuram & 35 - Madurantakam)
 */

// Fallback Snapshots for Instant 0ms Rendering & Offline Support
const FALLBACK_CONSTITUENCIES = {
  "35": {
    "success": true,
    "electionTitle": "Bye Election to Assembly Constituencies: Results October-2026",
    "constituency": "35 - MADURANTAKAM (Tamil Nadu)",
    "currentRound": 5,
    "totalRounds": 21,
    "roundProgress": 24,
    "lastUpdated": "11:33 am On 09/10/2026",
    "timestamp": "2026-10-09T06:05:02.293Z",
    "totalVotesCounted": 47941,
    "leadMargin": 6238,
    "leadingCandidate": {
      "name": "K.MARAGATHAM KUMARAVEL",
      "party": "Tamilaga Vettri Kazhagam",
      "partyCode": "TVK",
      "votes": 20067,
      "margin": "+ 6238",
      "img": "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/s22/KMARA-2026-20260915072201.jpg",
      "votePercentage": "41.86"
    },
    "candidates": [
      {
        "id": 1,
        "name": "K.MARAGATHAM KUMARAVEL",
        "party": "Tamilaga Vettri Kazhagam",
        "partyCode": "TVK",
        "votes": 20067,
        "margin": "+ 6238",
        "status": "leading",
        "img": "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/s22/KMARA-2026-20260915072201.jpg",
        "rank": 1,
        "votePercentage": "41.86"
      },
      {
        "id": 2,
        "name": "I.PARANTHAMEN",
        "party": "Dravida Munnetra Kazhagam",
        "partyCode": "DMK",
        "votes": 13829,
        "margin": "-6238",
        "status": "trailing",
        "img": "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/S22/IPARA-2026-20260919051148.jpg",
        "rank": 2,
        "votePercentage": "28.85"
      },
      {
        "id": 3,
        "name": "S.KANITHASAMPATH",
        "party": "All India Anna Dravida Munnetra Kazhagam",
        "partyCode": "AIADMK",
        "votes": 11442,
        "margin": "-8625",
        "status": "trailing",
        "img": "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/S22/SKANI-2026-20260919051229.jpg",
        "rank": 3,
        "votePercentage": "23.87"
      },
      {
        "id": 4,
        "name": "G.JANAKIRAMAN",
        "party": "Naam Tamilar Katchi",
        "partyCode": "NTK",
        "votes": 799,
        "margin": "-19268",
        "status": "trailing",
        "img": "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/S22/GJANA-2026-20260919065737.jpg",
        "rank": 4,
        "votePercentage": "1.67"
      },
      {
        "id": 5,
        "name": "SUGANTHI.P",
        "party": "Communist Party of India (Marxist)",
        "partyCode": "CPI",
        "votes": 621,
        "margin": "-19446",
        "status": "trailing",
        "img": "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/s22/SUGAN-2026-20260916074258.jpg",
        "rank": 5,
        "votePercentage": "1.30"
      },
      {
        "id": 6,
        "name": "KRISHNAKANTH.E",
        "party": "Independent",
        "partyCode": "IND",
        "votes": 275,
        "margin": "-19792",
        "status": "trailing",
        "img": "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/s22/KRISH-2026-20260916023751.jpg",
        "rank": 6,
        "votePercentage": "0.57"
      },
      {
        "id": 28,
        "name": "NOTA",
        "party": "None of the Above",
        "partyCode": "NOTA",
        "votes": 156,
        "margin": "-19911",
        "status": "nota",
        "img": "https://results.eci.gov.in/ResultAcByeOct2026/img/nota.jpg",
        "rank": 7,
        "votePercentage": "0.33"
      },
      {
        "id": 7,
        "name": "P.N.R.BASKARAN",
        "party": "Independent",
        "partyCode": "IND",
        "votes": 125,
        "margin": "-19942",
        "status": "trailing",
        "img": "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/s22/PNRBA-2026-20260916064922.jpg",
        "rank": 8,
        "votePercentage": "0.26"
      },
      {
        "id": 8,
        "name": "NAVINDAR.V",
        "party": "Independent",
        "partyCode": "IND",
        "votes": 100,
        "margin": "-19967",
        "status": "trailing",
        "img": "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/s22/NAVIN-2026-20260916010828.jpg",
        "rank": 9,
        "votePercentage": "0.21"
      },
      {
        "id": 9,
        "name": "KAYALVIZHI",
        "party": "Independent",
        "partyCode": "IND",
        "votes": 93,
        "margin": "-19974",
        "status": "trailing",
        "img": "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/S22/KAYAL-2026-20260919051259.jpg",
        "rank": 10,
        "votePercentage": "0.19"
      },
      {
        "id": 10,
        "name": "EZHIL.E",
        "party": "Independent",
        "partyCode": "IND",
        "votes": 54,
        "margin": "-20013",
        "status": "trailing",
        "img": "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/s22/EZHIL-2026-20260916025945.jpg",
        "rank": 11,
        "votePercentage": "0.11"
      },
      {
        "id": 11,
        "name": "K.ELAIYARASU",
        "party": "Independent",
        "partyCode": "IND",
        "votes": 47,
        "margin": "-20020",
        "status": "trailing",
        "img": "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/s22/KELAI-2026-20260916062316.jpg",
        "rank": 12,
        "votePercentage": "0.10"
      },
      {
        "id": 12,
        "name": "RAJAMANI",
        "party": "Independent",
        "partyCode": "IND",
        "votes": 43,
        "margin": "-20024",
        "status": "trailing",
        "img": "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/S22/RAJAM-2026-20260919034619.jpg",
        "rank": 13,
        "votePercentage": "0.09"
      },
      {
        "id": 13,
        "name": "M.MANOKAR",
        "party": "Independent",
        "partyCode": "IND",
        "votes": 32,
        "margin": "-20035",
        "status": "trailing",
        "img": "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/s22/MMANO-2026-20260916054749.jpg",
        "rank": 14,
        "votePercentage": "0.07"
      },
      {
        "id": 14,
        "name": "RANJITHAM.M",
        "party": "Independent",
        "partyCode": "IND",
        "votes": 31,
        "margin": "-20036",
        "status": "trailing",
        "img": "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/s22/RANJI-2026-20260910021100.jpg",
        "rank": 15,
        "votePercentage": "0.06"
      },
      {
        "id": 15,
        "name": "N.SATHIS KUMAR",
        "party": "Independent",
        "partyCode": "IND",
        "votes": 29,
        "margin": "-20038",
        "status": "trailing",
        "img": "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/s22/NSATH-2026-20260915071058.jpg",
        "rank": 16,
        "votePercentage": "0.06"
      },
      {
        "id": 16,
        "name": "DR.G.MOORTHY",
        "party": "Independent",
        "partyCode": "IND",
        "votes": 28,
        "margin": "-20039",
        "status": "trailing",
        "img": "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/S22/GMOOR-2026-20260919051332.jpg",
        "rank": 17,
        "votePercentage": "0.06"
      },
      {
        "id": 17,
        "name": "M.KADIRVEL",
        "party": "Independent",
        "partyCode": "IND",
        "votes": 24,
        "margin": "-20043",
        "status": "trailing",
        "img": "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/S22/MKADI-2026-20260919051704.jpg",
        "rank": 18,
        "votePercentage": "0.05"
      },
      {
        "id": 18,
        "name": "S.MURUGAN",
        "party": "Independent",
        "partyCode": "IND",
        "votes": 24,
        "margin": "-20043",
        "status": "trailing",
        "img": "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/s22/SMURU-2026-20260916071006.jpg",
        "rank": 19,
        "votePercentage": "0.05"
      },
      {
        "id": 19,
        "name": "LOGESH.K",
        "party": "Independent",
        "partyCode": "IND",
        "votes": 22,
        "margin": "-20045",
        "status": "trailing",
        "img": "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/s22/LOGES-2026-20260916031726.jpg",
        "rank": 20,
        "votePercentage": "0.05"
      },
      {
        "id": 20,
        "name": "K.BHUVANESWARI",
        "party": "Anaithinthiya Anna Dravida Makkal Seyal katchi",
        "partyCode": "OTH",
        "votes": 20,
        "margin": "-20047",
        "status": "trailing",
        "img": "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/s22/KBHUV-2026-20260911043509.jpg",
        "rank": 21,
        "votePercentage": "0.04"
      },
      {
        "id": 21,
        "name": "S.ARUMUGAM",
        "party": "Independent",
        "partyCode": "IND",
        "votes": 19,
        "margin": "-20048",
        "status": "trailing",
        "img": "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/s22/SARUM-2026-20260916060952.jpg",
        "rank": 22,
        "votePercentage": "0.04"
      },
      {
        "id": 22,
        "name": "V.MUTHUSELVAM",
        "party": "Anti Corruption Dynamic Party",
        "partyCode": "OTH",
        "votes": 15,
        "margin": "-20052",
        "status": "trailing",
        "img": "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/s22/VMUTH-2026-20260916041406.jpg",
        "rank": 23,
        "votePercentage": "0.03"
      },
      {
        "id": 23,
        "name": "G.RAJASEKAR",
        "party": "Desiya Makkal Sakthi Katchi",
        "partyCode": "OTH",
        "votes": 12,
        "margin": "-20055",
        "status": "trailing",
        "img": "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/s22/GRAJA-2026-20260915060249.jpg",
        "rank": 24,
        "votePercentage": "0.03"
      },
      {
        "id": 24,
        "name": "M.JEGAN",
        "party": "Independent",
        "partyCode": "IND",
        "votes": 11,
        "margin": "-20056",
        "status": "trailing",
        "img": "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/s22/MJEGA-2026-20260916034026.jpg",
        "rank": 25,
        "votePercentage": "0.02"
      },
      {
        "id": 25,
        "name": "J.RAVIKUMAR",
        "party": "Republican Party of India (Sivaraj)",
        "partyCode": "OTH",
        "votes": 9,
        "margin": "-20058",
        "status": "trailing",
        "img": "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/s22/JRAVI-2026-20260915073040.jpg",
        "rank": 26,
        "votePercentage": "0.02"
      },
      {
        "id": 26,
        "name": "M.G.RAMU",
        "party": "Jebamani Janata",
        "partyCode": "OTH",
        "votes": 8,
        "margin": "-20059",
        "status": "trailing",
        "img": "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/s22/MGRAM-2026-20260916051126.jpg",
        "rank": 27,
        "votePercentage": "0.02"
      },
      {
        "id": 27,
        "name": "K.ARUMUGAM",
        "party": "Independent",
        "partyCode": "IND",
        "votes": 6,
        "margin": "-20061",
        "status": "trailing",
        "img": "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/s22/KARUM-2026-20260916082552.jpg",
        "rank": 28,
        "votePercentage": "0.01"
      }
    ],
    "acId": "35",
    "acName": "Madurantakam",
    "sourceUrl": "https://results.eci.gov.in/ResultAcByeOct2026/candidateswise-S2235.htm",
    "fetchedAt": "2026-10-09T06:05:02.295Z"
  },
  "101": {
    "success": true,
    "electionTitle": "Bye Election to Assembly Constituencies: Results October-2026",
    "constituency": "101 - DHARAPURAM (Tamil Nadu)",
    "currentRound": 9,
    "totalRounds": 23,
    "roundProgress": 39,
    "lastUpdated": "11:33 am On 09/10/2026",
    "timestamp": "2026-10-09T06:05:02.699Z",
    "totalVotesCounted": 70277,
    "leadMargin": 2112,
    "leadingCandidate": {
      "name": "SATHYABAMA.P",
      "party": "Tamilaga Vettri Kazhagam",
      "partyCode": "TVK",
      "votes": 24047,
      "margin": "+ 2112",
      "img": "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/s22/SATHY-2026-20260916071322.jpg",
      "votePercentage": "34.22"
    },
    "candidates": [
      {
        "id": 1,
        "name": "SATHYABAMA.P",
        "party": "Tamilaga Vettri Kazhagam",
        "partyCode": "TVK",
        "votes": 24047,
        "margin": "+ 2112",
        "status": "leading",
        "img": "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/s22/SATHY-2026-20260916071322.jpg",
        "rank": 1,
        "votePercentage": "34.22"
      },
      {
        "id": 2,
        "name": "BANUMATHI.K",
        "party": "All India Anna Dravida Munnetra Kazhagam",
        "partyCode": "AIADMK",
        "votes": 21935,
        "margin": "-2112",
        "status": "trailing",
        "img": "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/s22/BANUM-2026-20260916092540.jpg",
        "rank": 2,
        "votePercentage": "31.21"
      },
      {
        "id": 3,
        "name": "SUGANYA.S",
        "party": "Dravida Munnetra Kazhagam",
        "partyCode": "DMK",
        "votes": 19972,
        "margin": "-4075",
        "status": "trailing",
        "img": "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/s22/SUGAN-2026-20260915042839.jpg",
        "rank": 3,
        "votePercentage": "28.42"
      },
      {
        "id": 4,
        "name": "KARTHIKA.M",
        "party": "Naam Tamilar Katchi",
        "partyCode": "NTK",
        "votes": 1891,
        "margin": "-22156",
        "status": "trailing",
        "img": "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/s22/KARTH-2026-20260916090419.jpg",
        "rank": 4,
        "votePercentage": "2.69"
      },
      {
        "id": 5,
        "name": "LAKSHMANAN.P",
        "party": "Communist Party of India",
        "partyCode": "CPI",
        "votes": 442,
        "margin": "-23605",
        "status": "trailing",
        "img": "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/s22/LAKSH-2026-20260916072443.jpg",
        "rank": 5,
        "votePercentage": "0.63"
      },
      {
        "id": 6,
        "name": "RAJARATHINAM.S",
        "party": "Independent",
        "partyCode": "IND",
        "votes": 312,
        "margin": "-23735",
        "status": "trailing",
        "img": "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/s22/RAJAR-2026-20260915062944.jpg",
        "rank": 6,
        "votePercentage": "0.44"
      },
      {
        "id": 23,
        "name": "NOTA",
        "party": "None of the Above",
        "partyCode": "NOTA",
        "votes": 258,
        "margin": "-23789",
        "status": "nota",
        "img": "https://results.eci.gov.in/ResultAcByeOct2026/img/nota.jpg",
        "rank": 7,
        "votePercentage": "0.37"
      },
      {
        "id": 7,
        "name": "MUTHUSAMY.P",
        "party": "Independent",
        "partyCode": "IND",
        "votes": 171,
        "margin": "-23876",
        "status": "trailing",
        "img": "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/S22/MUTHU-2026-20260916064743.jpg",
        "rank": 8,
        "votePercentage": "0.24"
      },
      {
        "id": 8,
        "name": "MARIMUTHU.N",
        "party": "Independent",
        "partyCode": "IND",
        "votes": 167,
        "margin": "-23880",
        "status": "trailing",
        "img": "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/s22/MARIM-2026-20260916074606.jpg",
        "rank": 9,
        "votePercentage": "0.24"
      },
      {
        "id": 9,
        "name": "BANUPRIYA.S",
        "party": "Independent",
        "partyCode": "IND",
        "votes": 153,
        "margin": "-23894",
        "status": "trailing",
        "img": "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/s22/BANUP-2026-20260915062542.jpg",
        "rank": 10,
        "votePercentage": "0.22"
      },
      {
        "id": 10,
        "name": "SATHISHKUMAR.M",
        "party": "Independent",
        "partyCode": "IND",
        "votes": 125,
        "margin": "-23922",
        "status": "trailing",
        "img": "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/s22/SATHI-2026-20260915051952.jpg",
        "rank": 11,
        "votePercentage": "0.18"
      },
      {
        "id": 11,
        "name": "PERUMAL.R",
        "party": "Independent",
        "partyCode": "IND",
        "votes": 116,
        "margin": "-23931",
        "status": "trailing",
        "img": "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/s22/PERUM-2026-20260916101543.jpg",
        "rank": 12,
        "votePercentage": "0.17"
      },
      {
        "id": 12,
        "name": "BANUMATHI.C",
        "party": "Independent",
        "partyCode": "IND",
        "votes": 107,
        "margin": "-23940",
        "status": "trailing",
        "img": "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/s22/BANUM-2026-20260916081040.jpg",
        "rank": 13,
        "votePercentage": "0.15"
      },
      {
        "id": 13,
        "name": "NALLASAMY.P",
        "party": "Independent",
        "partyCode": "IND",
        "votes": 102,
        "margin": "-23945",
        "status": "trailing",
        "img": "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/s22/NALLA-2026-20260915070306.jpg",
        "rank": 14,
        "votePercentage": "0.15"
      },
      {
        "id": 14,
        "name": "MAHENDRAN.S",
        "party": "Independent",
        "partyCode": "IND",
        "votes": 97,
        "margin": "-23950",
        "status": "trailing",
        "img": "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/s22/MAHEN-2026-20260916073046.jpg",
        "rank": 15,
        "votePercentage": "0.14"
      },
      {
        "id": 15,
        "name": "DHANALAKSHMI.S",
        "party": "Independent",
        "partyCode": "IND",
        "votes": 70,
        "margin": "-23977",
        "status": "trailing",
        "img": "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/s22/DHANA-2026-20260916082805.jpg",
        "rank": 16,
        "votePercentage": "0.10"
      },
      {
        "id": 16,
        "name": "SATHYABAMA.M",
        "party": "Independent",
        "partyCode": "IND",
        "votes": 59,
        "margin": "-23988",
        "status": "trailing",
        "img": "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/s22/SATHY-2026-20260915063438.jpg",
        "rank": 17,
        "votePercentage": "0.08"
      },
      {
        "id": 17,
        "name": "RAJESHWARI.V",
        "party": "Independent",
        "partyCode": "IND",
        "votes": 58,
        "margin": "-23989",
        "status": "trailing",
        "img": "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/s22/RAJES-2026-20260915061746.jpg",
        "rank": 18,
        "votePercentage": "0.08"
      },
      {
        "id": 18,
        "name": "ARULRAJU.G",
        "party": "Anaithinthiya Anna Dravida Makkal Seyal katchi",
        "partyCode": "OTH",
        "votes": 53,
        "margin": "-23994",
        "status": "trailing",
        "img": "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/s22/ARULR-2026-20260916085704.jpg",
        "rank": 19,
        "votePercentage": "0.08"
      },
      {
        "id": 19,
        "name": "JOTHEESHWARI.D",
        "party": "Independent",
        "partyCode": "IND",
        "votes": 52,
        "margin": "-23995",
        "status": "trailing",
        "img": "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/s22/JOTHE-2026-20260915063915.jpg",
        "rank": 20,
        "votePercentage": "0.07"
      },
      {
        "id": 20,
        "name": "ARUMUGAM.R",
        "party": "Ganasangam Party of India",
        "partyCode": "OTH",
        "votes": 36,
        "margin": "-24011",
        "status": "trailing",
        "img": "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/s22/ARUMU-2026-20260916103127.jpg",
        "rank": 21,
        "votePercentage": "0.05"
      },
      {
        "id": 21,
        "name": "SASIPRIYA.S",
        "party": "Independent",
        "partyCode": "IND",
        "votes": 28,
        "margin": "-24019",
        "status": "trailing",
        "img": "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/s22/SASIP-2026-20260915062213.jpg",
        "rank": 22,
        "votePercentage": "0.04"
      },
      {
        "id": 22,
        "name": "MAHESHWARAN.S",
        "party": "Anti Corruption Dynamic Party",
        "partyCode": "OTH",
        "votes": 26,
        "margin": "-24021",
        "status": "trailing",
        "img": "https://results.eci.gov.in/uploads2/candprofile/E34/2026/AC/s22/MAHES-2026-20260915051407.jpg",
        "rank": 23,
        "votePercentage": "0.04"
      }
    ],
    "acId": "101",
    "acName": "Dharapuram",
    "sourceUrl": "https://results.eci.gov.in/ResultAcByeOct2026/candidateswise-S22101.htm",
    "fetchedAt": "2026-10-09T06:05:02.699Z"
  }
};

// Global State
const state = {
  activeAc: '101', // '101' or '35'
  constituencies: FALLBACK_CONSTITUENCIES,
  data: FALLBACK_CONSTITUENCIES['101'] || Object.values(FALLBACK_CONSTITUENCIES)[0],
  previousVotes: {},
  previousRound: {},
  countdown: 60,
  timerInterval: null,
  isFetching: false,
  soundEnabled: true,
  currentLanguage: 'en', // 'en' or 'ta'
  currentFilter: 'all',
  searchQuery: '',
  theme: 'dark'
};

// Translations
const i18n = {
  en: {
    live: 'LIVE COUNTING',
    auto_updates: 'Auto-updates every 1 min',
    eci_timestamp: 'ECI Timestamp:',
    refresh_now: 'Refresh Now',
    currently_leading: 'CURRENT LEADER',
    evm_round: 'EVM Round:',
    leading: 'LEADING',
    trailing: 'TRAILING',
    total_votes: 'Votes Polled',
    margin_lead: 'Lead Margin',
    vote_share: 'Vote Share',
    counting_progress: 'Counting Progress:',
    total_votes_counted: 'Total Counted',
    current_lead_gap: "Leader's Lead",
    evm_rounds_status: 'EVM Rounds',
    total_contestants: 'Candidates',
    top_battle: 'Leading Contenders Battle',
    top_contenders_hint: 'Top 3 Parties',
    vote_share_distribution: 'Vote Share Distribution',
    proportional_share: 'Proportional %',
    candidate_wise_results: 'Candidate-Wise Results',
    filter_all: 'All',
    filter_top5: 'Top 5',
    filter_parties: 'Major Parties',
    filter_ind: 'Independents',
    search_placeholder: 'Search candidate or party...',
    votes: 'votes',
    synced_just_now: 'Synced just now',
    synced_secs_ago: 'Synced {s}s ago',
    ac_101_name: 'Dharapuram',
    ac_35_name: 'Madurantakam'
  },
  ta: {
    live: 'நேரலை வாக்கு எண்ணிக்கை',
    auto_updates: '1 நிமிடத்திற்கு ஒருமுறை தானாகப் புதுப்பிக்கப்படும்',
    eci_timestamp: 'தேர்தல் ஆணைய நேரம்:',
    refresh_now: 'புதுப்பிக்கவும்',
    currently_leading: 'முன்னிலை வேட்பாளர்',
    evm_round: 'EVM சுற்று:',
    leading: 'முன்னிலை',
    trailing: 'பின்னடைவு',
    total_votes: 'பெற்ற வாக்குகள்',
    margin_lead: 'வாக்கு வித்தியாசம்',
    vote_share: 'வாக்கு சதவீதம்',
    counting_progress: 'எண்ணிக்கை முன்னேற்றம்:',
    total_votes_counted: 'மொத்த வாக்குகள்',
    current_lead_gap: 'முன்னிலை இடைவெளி',
    evm_rounds_status: 'சுற்றுகள்',
    total_contestants: 'வேட்பாளர்கள்',
    top_battle: 'முன்னணி வேட்பாளர்கள் மோதல்',
    top_contenders_hint: 'முதல் 3 கட்சிகள்',
    vote_share_distribution: 'வாக்கு விகிதாச்சாரம்',
    proportional_share: 'சதவீத பகிர்வு',
    candidate_wise_results: 'வேட்பாளர் வாரியான முடிவுகள்',
    filter_all: 'அனைத்தும்',
    filter_top5: 'முதல் 5',
    filter_parties: 'முக்கிய கட்சிகள்',
    filter_ind: 'சுயேச்சைகள்',
    search_placeholder: 'வேட்பாளர் அல்லது கட்சியைத் தேடுக...',
    votes: 'வாக்குகள்',
    synced_just_now: 'இப்போது புதுப்பிக்கப்பட்டது',
    synced_secs_ago: '{s} விநாடிகளுக்கு முன்',
    ac_101_name: 'தாராபுரம்',
    ac_35_name: 'மதுராந்தகம்'
  }
};

// Party Color Theme Config
const PARTY_THEMES = {
  AIADMK: { color: '#059669', bg: 'rgba(5, 150, 105, 0.15)', nameTa: 'அதிமுக' },
  TVK: { color: '#dc2626', bg: 'rgba(220, 38, 38, 0.15)', nameTa: 'தவெக' },
  DMK: { color: '#dc2626', bg: 'rgba(220, 38, 38, 0.15)', nameTa: 'திமுக' },
  NTK: { color: '#d97706', bg: 'rgba(217, 119, 6, 0.15)', nameTa: 'நாதக' },
  CPI: { color: '#e11d48', bg: 'rgba(225, 29, 72, 0.15)', nameTa: 'சிபிஐ' },
  IND: { color: '#6366f1', bg: 'rgba(99, 102, 241, 0.12)', nameTa: 'சுயேச்சை' },
  NOTA: { color: '#64748b', bg: 'rgba(100, 116, 139, 0.15)', nameTa: 'நோட்டா' }
};

// Fallback Avatar SVG
const DEFAULT_AVATAR = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="%2364748b"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>`;

// DOM Element References
const dom = {
  electionTitle: document.getElementById('electionTitle'),
  constituencyTitle: document.getElementById('constituencyTitle'),
  lastSyncText: document.getElementById('lastSyncText'),
  countdownSeconds: document.getElementById('countdownSeconds'),
  timerProgress: document.getElementById('timerProgress'),
  eciLastUpdated: document.getElementById('eciLastUpdated'),
  manualRefreshBtn: document.getElementById('manualRefreshBtn'),
  dockRefreshBtn: document.getElementById('dockRefreshBtn'),
  soundToggleBtn: document.getElementById('soundToggleBtn'),
  langToggleBtn: document.getElementById('langToggleBtn'),
  themeToggleBtn: document.getElementById('themeToggleBtn'),

  // Constituency Switcher Tabs
  tabAc101: document.getElementById('tabAc101'),
  tabAc35: document.getElementById('tabAc35'),
  subtagAc101: document.getElementById('subtagAc101'),
  subtagAc35: document.getElementById('subtagAc35'),

  // Leader Spotlight
  spotlightRoundNum: document.getElementById('spotlightRoundNum'),
  leaderPhoto: document.getElementById('leaderPhoto'),
  leaderPartyChip: document.getElementById('leaderPartyChip'),
  leaderName: document.getElementById('leaderName'),
  leaderPartyFull: document.getElementById('leaderPartyFull'),
  leaderVotes: document.getElementById('leaderVotes'),
  leaderMargin: document.getElementById('leaderMargin'),
  leaderPercentage: document.getElementById('leaderPercentage'),
  roundProgressDetail: document.getElementById('roundProgressDetail'),
  roundProgressPercent: document.getElementById('roundProgressPercent'),
  roundProgressBar: document.getElementById('roundProgressBar'),

  // Overview Stats
  totalVotesCounted: document.getElementById('totalVotesCounted'),
  overviewLeadMargin: document.getElementById('overviewLeadMargin'),
  overviewRounds: document.getElementById('overviewRounds'),
  totalCandidatesCount: document.getElementById('totalCandidatesCount'),

  // Battle & Chart
  topContendersContainer: document.getElementById('topContendersContainer'),
  voteShareStackedBar: document.getElementById('voteShareStackedBar'),
  voteShareLegend: document.getElementById('voteShareLegend'),

  // Candidates List
  candidateCountDisplay: document.getElementById('candidateCountDisplay'),
  candidateSearchInput: document.getElementById('candidateSearchInput'),
  clearSearchBtn: document.getElementById('clearSearchBtn'),
  candidatesGrid: document.getElementById('candidatesGrid'),
  filterPills: document.querySelectorAll('.filter-pill'),

  // Mobile Dock
  dockLeaderImg: document.getElementById('dockLeaderImg'),
  dockLeaderName: document.getElementById('dockLeaderName'),
  dockLeaderParty: document.getElementById('dockLeaderParty'),
  dockLeaderVotes: document.getElementById('dockLeaderVotes'),
  dockLeaderMargin: document.getElementById('dockLeaderMargin'),

  // Toast
  toastNotification: document.getElementById('toastNotification'),
  toastMessage: document.getElementById('toastMessage')
};

function formatNumber(num) {
  if (num === null || num === undefined) return '0';
  return Number(num).toLocaleString('en-IN');
}

function playNotificationChime() {
  if (!state.soundEnabled) return;
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(659.25, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(783.99, ctx.currentTime + 0.15);

    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.4);
  } catch (e) {}
}

function showToast(message) {
  dom.toastMessage.textContent = message;
  dom.toastNotification.classList.add('show');
  setTimeout(() => {
    dom.toastNotification.classList.remove('show');
  }, 3500);
}

// Switch Active Constituency Tab
function switchConstituency(acId) {
  if (!state.constituencies[acId]) return;
  state.activeAc = acId;
  state.data = state.constituencies[acId];

  // Update Tab Button States
  if (dom.tabAc101) {
    const is101 = acId === '101';
    dom.tabAc101.classList.toggle('active', is101);
    dom.tabAc101.setAttribute('aria-selected', is101);
  }
  if (dom.tabAc35) {
    const is35 = acId === '35';
    dom.tabAc35.classList.toggle('active', is35);
    dom.tabAc35.setAttribute('aria-selected', is35);
  }

  // Update URL hash without scroll jump
  if (history.replaceState) {
    history.replaceState(null, '', '#' + acId);
  } else {
    window.location.hash = acId;
  }

  // Reset search filter
  state.searchQuery = '';
  if (dom.candidateSearchInput) dom.candidateSearchInput.value = '';
  if (dom.clearSearchBtn) dom.clearSearchBtn.classList.add('hidden');

  renderDashboard();
}

// Update Preview Subtags on Constituency Tabs
function updateConstituencyTabs() {
  const c101 = state.constituencies['101'];
  if (c101 && dom.subtagAc101) {
    const leader = c101.leadingCandidate;
    const party = leader ? leader.partyCode : 'Lead';
    const margin = leader && leader.margin ? leader.margin : '';
    dom.subtagAc101.textContent = `${party} Lead (${margin}) • R${c101.currentRound}/${c101.totalRounds}`;
  }

  const c35 = state.constituencies['35'];
  if (c35 && dom.subtagAc35) {
    const leader = c35.leadingCandidate;
    const party = leader ? leader.partyCode : 'Lead';
    const margin = leader && leader.margin ? leader.margin : '';
    dom.subtagAc35.textContent = `${party} Lead (${margin}) • R${c35.currentRound}/${c35.totalRounds}`;
  }
}

// Fetch Engine (Supports Multi-Constituency API and static data.json)
async function fetchResults(isManual = false) {
  if (state.isFetching) return;
  state.isFetching = true;

  if (isManual) {
    dom.manualRefreshBtn.classList.add('loading');
    dom.dockRefreshBtn.classList.add('loading');
  }

  let freshConstituencies = null;

  // 1. Live API Candidates
  const apiCandidates = ['./api/results', 'api/results', '/api/results'];
  for (const ep of apiCandidates) {
    try {
      const res = await fetch(ep, { cache: 'no-store' });
      if (res.ok) {
        const json = await res.json();
        if (json && json.success) {
          if (json.constituencies) {
            freshConstituencies = json.constituencies;
            break;
          } else if (json.data) {
            freshConstituencies = { [state.activeAc]: json.data };
            break;
          }
        }
      }
    } catch (e) {}
  }

  // 2. Static Data Feed Candidates (data.json for GitHub Pages)
  if (!freshConstituencies) {
    const dataCandidates = [
      `./data.json?_t=${Date.now()}`,
      `data.json?_t=${Date.now()}`,
      `/data.json?_t=${Date.now()}`
    ];

    for (const dUrl of dataCandidates) {
      try {
        const res = await fetch(dUrl, { cache: 'no-store' });
        if (res.ok) {
          const json = await res.json();
          if (json && json.constituencies) {
            freshConstituencies = json.constituencies;
            break;
          } else if (json && json.data) {
            freshConstituencies = { [state.activeAc]: json.data };
            break;
          }
        }
      } catch (e) {}
    }
  }

  if (freshConstituencies) {
    handleDataUpdate(freshConstituencies);
    if (isManual) {
      showToast(state.currentLanguage === 'ta' ? 'முடிவுகள் புதுப்பிக்கப்பட்டன!' : 'Live results updated!');
    }
  } else {
    dom.lastSyncText.textContent = state.currentLanguage === 'ta' ? 'இணைக்கப்பட்டுள்ளது' : 'Live Sync Active';
  }

  state.isFetching = false;
  dom.manualRefreshBtn.classList.remove('loading');
  dom.dockRefreshBtn.classList.remove('loading');
  resetCountdown();
}

function handleDataUpdate(newConstituencies) {
  // Check for updates in active constituency
  const activeNew = newConstituencies[state.activeAc] || Object.values(newConstituencies)[0];
  const oldActive = state.data;

  let hasRoundChanged = false;
  if (oldActive && activeNew && activeNew.currentRound !== oldActive.currentRound) {
    hasRoundChanged = true;
  }

  if (hasRoundChanged) {
    playNotificationChime();
    const roundMsg = state.currentLanguage === 'ta'
      ? `சுற்று ${activeNew.currentRound} முடிவுகள்: ${activeNew.constituency} - ${activeNew.leadingCandidate.name} முன்னிலை!`
      : `Round ${activeNew.currentRound} declared: ${activeNew.constituency} - ${activeNew.leadingCandidate.name} leading!`;
    showToast(roundMsg);
  }

  // Merge constituencies
  state.constituencies = { ...state.constituencies, ...newConstituencies };
  state.data = state.constituencies[state.activeAc] || activeNew;

  updateConstituencyTabs();
  renderDashboard();
}

// Render Dashboard
function renderDashboard() {
  if (!state.data) return;
  const d = state.data;
  const lang = state.currentLanguage;
  const t = i18n[lang];

  // Title & Headers
  if (dom.constituencyTitle) {
    dom.constituencyTitle.innerHTML = `${d.constituency} <span>(Tamil Nadu)</span>`;
  }
  if (dom.electionTitle && d.electionTitle) {
    dom.electionTitle.textContent = d.electionTitle;
  }
  dom.eciLastUpdated.textContent = d.lastUpdated || 'Live';
  dom.lastSyncText.textContent = t.synced_just_now;

  // Round tracking
  dom.spotlightRoundNum.textContent = `${d.currentRound}/${d.totalRounds}`;
  dom.overviewRounds.textContent = `${d.currentRound} / ${d.totalRounds}`;
  dom.roundProgressDetail.textContent = `Round ${d.currentRound} of ${d.totalRounds}`;
  dom.roundProgressPercent.textContent = `${d.roundProgress}%`;
  dom.roundProgressBar.style.width = `${d.roundProgress}%`;

  // Overview Counts
  dom.totalVotesCounted.textContent = formatNumber(d.totalVotesCounted);
  dom.totalCandidatesCount.textContent = d.candidates ? d.candidates.length : 0;

  const leadMarginNum = d.leadMargin || 0;
  dom.overviewLeadMargin.textContent = `+${formatNumber(leadMarginNum)}`;

  // Leading Candidate Spotlight
  if (d.leadingCandidate) {
    const leader = d.leadingCandidate;
    dom.leaderName.textContent = leader.name;
    dom.leaderPartyChip.textContent = leader.partyCode;
    dom.leaderPartyFull.textContent = leader.party;
    dom.leaderVotes.textContent = formatNumber(leader.votes);
    dom.leaderMargin.textContent = leader.margin || `+${formatNumber(leadMarginNum)}`;
    dom.leaderPercentage.textContent = `${leader.votePercentage}%`;

    if (leader.img) {
      dom.leaderPhoto.src = leader.img;
      dom.dockLeaderImg.src = leader.img;
    }

    // Mobile Dock
    dom.dockLeaderName.textContent = leader.name;
    dom.dockLeaderParty.textContent = leader.partyCode;
    dom.dockLeaderVotes.textContent = formatNumber(leader.votes);
    dom.dockLeaderMargin.textContent = leader.margin || `+${formatNumber(leadMarginNum)}`;
  }

  // Update tabs
  updateConstituencyTabs();

  // Render Top 3 Contenders Battle
  renderTopContenders(d.candidates ? d.candidates.slice(0, 3) : []);

  // Render Vote Share Proportional Bar
  renderVoteShareBar(d.candidates || [], d.totalVotesCounted);

  // Render Candidate Cards Grid
  renderCandidatesList();
}

function renderTopContenders(top3) {
  if (!top3 || top3.length === 0) return;

  const html = top3.map((c, index) => {
    const partyTheme = PARTY_THEMES[c.partyCode] || PARTY_THEMES.IND;
    const isLead = c.status === 'leading';
    const rank = index + 1;

    return `
      <div class="contender-card rank-${rank}">
        <div class="contender-top">
          <div class="contender-photo-wrap">
            <img src="${c.img || DEFAULT_AVATAR}" alt="${c.name}" class="contender-img" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='${DEFAULT_AVATAR}';">
            <span class="contender-rank-badge">#${rank}</span>
          </div>
          <div class="contender-info">
            <span class="contender-party-badge" style="background: ${partyTheme.bg}; color: ${partyTheme.color};">${c.partyCode}</span>
            <div class="contender-name" title="${c.name}">${c.name}</div>
            <span class="contender-status-pill ${isLead ? 'status-lead-pill' : 'status-trail-pill'}">
              ${isLead ? (state.currentLanguage === 'ta' ? 'முன்னிலை' : 'LEADING') : (state.currentLanguage === 'ta' ? 'பின்னடைவு' : 'TRAILING')}
            </span>
          </div>
        </div>

        <div class="contender-numbers">
          <span class="contender-votes">${formatNumber(c.votes)}</span>
          <span class="contender-margin ${isLead ? 'text-emerald' : 'text-muted'}">${c.margin || ''}</span>
        </div>

        <div class="contender-bar">
          <div class="contender-bar-fill" style="width: ${c.votePercentage}%; background: ${partyTheme.color};"></div>
        </div>
      </div>
    `;
  }).join('');

  dom.topContendersContainer.innerHTML = html;
}

function renderVoteShareBar(candidates, totalVotes) {
  if (!candidates || candidates.length === 0 || totalVotes === 0) return;

  const top4 = candidates.slice(0, 4);
  const remaining = candidates.slice(4);
  const othersVotes = remaining.reduce((sum, c) => sum + c.votes, 0);
  const othersPct = totalVotes > 0 ? ((othersVotes / totalVotes) * 100).toFixed(1) : 0;

  const segments = [...top4];
  if (othersVotes > 0) {
    segments.push({
      name: 'Others & NOTA',
      partyCode: 'OTH',
      votes: othersVotes,
      votePercentage: othersPct
    });
  }

  const barHtml = segments.map(s => {
    const theme = PARTY_THEMES[s.partyCode] || { color: '#94a3b8' };
    return `<div class="share-segment" style="width: ${s.votePercentage}%; background: ${theme.color};" data-tooltip="${s.partyCode}: ${s.votePercentage}% (${formatNumber(s.votes)})"></div>`;
  }).join('');
  dom.voteShareStackedBar.innerHTML = barHtml;

  const legendHtml = segments.map(s => {
    const theme = PARTY_THEMES[s.partyCode] || { color: '#94a3b8' };
    return `
      <div class="legend-item">
        <span class="legend-dot" style="background: ${theme.color};"></span>
        <span><strong>${s.partyCode}</strong>: ${s.votePercentage}%</span>
      </div>
    `;
  }).join('');
  dom.voteShareLegend.innerHTML = legendHtml;
}

function renderCandidatesList() {
  if (!state.data || !state.data.candidates) return;
  const candidates = state.data.candidates;
  const query = state.searchQuery.trim().toLowerCase();
  const filter = state.currentFilter;

  let filtered = candidates.filter(c => {
    if (query) {
      const matchName = c.name.toLowerCase().includes(query);
      const matchParty = c.party.toLowerCase().includes(query) || c.partyCode.toLowerCase().includes(query);
      if (!matchName && !matchParty) return false;
    }

    if (filter === 'top5') return c.rank <= 5;
    if (filter === 'recognized') return ['AIADMK', 'TVK', 'DMK', 'NTK', 'CPI', 'BJP', 'INC'].includes(c.partyCode);
    if (filter === 'ind') return c.partyCode === 'IND';
    if (filter === 'nota') return c.partyCode === 'NOTA';

    return true;
  });

  dom.candidateCountDisplay.textContent = `${filtered.length} Candidates`;

  if (filtered.length === 0) {
    dom.candidatesGrid.innerHTML = `
      <div class="empty-state">
        <p>No candidates found matching "<strong>${state.searchQuery}</strong>"</p>
      </div>
    `;
    return;
  }

  const html = filtered.map(c => {
    const partyTheme = PARTY_THEMES[c.partyCode] || PARTY_THEMES.IND;
    const isLeading = c.status === 'leading';
    const isNota = c.partyCode === 'NOTA';
    const partyClass = `party-${c.partyCode.toLowerCase()}`;

    return `
      <div class="cand-card ${isLeading ? 'is-leading' : ''}">
        <div class="cand-card-main">
          <div class="cand-avatar-wrap">
            <img src="${c.img || DEFAULT_AVATAR}" alt="${c.name}" class="cand-avatar" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='${DEFAULT_AVATAR}';">
            <span class="cand-rank">${c.rank}</span>
          </div>
          <div class="cand-meta">
            <div class="cand-meta-top">
              <span class="cand-party-pill ${partyClass}">${c.partyCode}</span>
              ${isLeading ? '<span class="cand-margin-badge margin-positive">LEADING</span>' : ''}
            </div>
            <div class="cand-name-text" title="${c.name}">${c.name}</div>
            <div class="cand-party-fullname" title="${c.party}">${c.party}</div>
          </div>
        </div>

        <div class="cand-card-stats">
          <div>
            <span class="cand-votes-num">${formatNumber(c.votes)}</span>
            <small style="color: var(--text-muted); font-size: 0.72rem;"> (${c.votePercentage}%)</small>
          </div>
          <div class="cand-margin-badge ${isLeading ? 'margin-positive' : 'margin-negative'}">
            ${c.margin ? c.margin : (isNota ? 'NOTA' : '')}
          </div>
        </div>

        <div class="cand-progress-line">
          <div class="cand-progress-line-fill" style="width: ${c.votePercentage}%; background: ${partyTheme.color};"></div>
        </div>
      </div>
    `;
  }).join('');

  dom.candidatesGrid.innerHTML = html;
}

function startCountdownTimer() {
  if (state.timerInterval) clearInterval(state.timerInterval);

  state.timerInterval = setInterval(() => {
    state.countdown--;
    dom.countdownSeconds.textContent = state.countdown;

    const pct = Math.max(0, (state.countdown / 60) * 100);
    dom.timerProgress.setAttribute('stroke-dasharray', `${pct}, 100`);

    if (state.countdown <= 0) {
      resetCountdown();
      fetchResults(false);
    }
  }, 1000);
}

function resetCountdown() {
  state.countdown = 60;
  dom.countdownSeconds.textContent = '60';
  dom.timerProgress.setAttribute('stroke-dasharray', '100, 100');
}

function switchLanguage() {
  state.currentLanguage = state.currentLanguage === 'en' ? 'ta' : 'en';
  const lang = state.currentLanguage;
  const t = i18n[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.textContent = t[key];
  });

  const enSpan = dom.langToggleBtn.querySelector('.lang-en');
  const taSpan = dom.langToggleBtn.querySelector('.lang-ta');
  if (lang === 'ta') {
    enSpan.classList.remove('font-bold');
    taSpan.classList.add('font-bold');
    document.body.style.fontFamily = 'var(--font-tamil)';
  } else {
    enSpan.classList.add('font-bold');
    taSpan.classList.remove('font-bold');
    document.body.style.fontFamily = 'var(--font-body)';
  }

  if (state.data) renderDashboard();
}

function switchTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', state.theme);
  localStorage.setItem('tn_election_theme', state.theme);

  const moonIcon = dom.themeToggleBtn.querySelector('.theme-moon');
  const sunIcon = dom.themeToggleBtn.querySelector('.theme-sun');
  if (state.theme === 'light') {
    moonIcon.classList.add('hidden');
    sunIcon.classList.remove('hidden');
  } else {
    moonIcon.classList.remove('hidden');
    sunIcon.classList.add('hidden');
  }
}

function toggleSound() {
  state.soundEnabled = !state.soundEnabled;
  const onIcon = dom.soundToggleBtn.querySelector('.sound-on-icon');
  const offIcon = dom.soundToggleBtn.querySelector('.sound-off-icon');
  if (state.soundEnabled) {
    onIcon.classList.remove('hidden');
    offIcon.classList.add('hidden');
    playNotificationChime();
    showToast('Sound alerts enabled');
  } else {
    onIcon.classList.add('hidden');
    offIcon.classList.remove('hidden');
    showToast('Sound alerts muted');
  }
}

function initEventListeners() {
  dom.manualRefreshBtn.addEventListener('click', () => fetchResults(true));
  dom.dockRefreshBtn.addEventListener('click', () => fetchResults(true));
  dom.soundToggleBtn.addEventListener('click', toggleSound);
  dom.langToggleBtn.addEventListener('click', switchLanguage);
  dom.themeToggleBtn.addEventListener('click', switchTheme);

  // Tab switcher
  if (dom.tabAc101) {
    dom.tabAc101.addEventListener('click', () => switchConstituency('101'));
  }
  if (dom.tabAc35) {
    dom.tabAc35.addEventListener('click', () => switchConstituency('35'));
  }

  // Hash listener
  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.replace('#', '').trim();
    if (hash === '35' || hash === '101') {
      switchConstituency(hash);
    }
  });

  // Search Input
  dom.candidateSearchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    if (state.searchQuery) {
      dom.clearSearchBtn.classList.remove('hidden');
    } else {
      dom.clearSearchBtn.classList.add('hidden');
    }
    renderCandidatesList();
  });

  dom.clearSearchBtn.addEventListener('click', () => {
    dom.candidateSearchInput.value = '';
    state.searchQuery = '';
    dom.clearSearchBtn.classList.add('hidden');
    renderCandidatesList();
  });

  // Filter Pills
  dom.filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      dom.filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      state.currentFilter = pill.getAttribute('data-filter');
      renderCandidatesList();
    });
  });

  // Keyboard shortcut: Press R to refresh, 1/2 for constituency switch
  window.addEventListener('keydown', (e) => {
    if (document.activeElement.tagName === 'INPUT') return;
    if (e.key === 'r' || e.key === 'R') fetchResults(true);
    if (e.key === '1') switchConstituency('101');
    if (e.key === '2') switchConstituency('35');
  });
}

function init() {
  const savedTheme = localStorage.getItem('tn_election_theme');
  if (savedTheme && savedTheme !== state.theme) {
    switchTheme();
  }

  // Check URL hash for constituency selection (#35 or #101)
  const hash = window.location.hash.replace('#', '').trim();
  if (hash === '35' || hash === '101') {
    state.activeAc = hash;
    state.data = state.constituencies[hash];
  }

  initEventListeners();
  switchConstituency(state.activeAc);
  startCountdownTimer();
  fetchResults(false);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
