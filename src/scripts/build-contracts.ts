import fs from "fs-extra";
import * as erc721a from "../templates/IndelibleERC721A";

const buildContracts = async () => {
  const contractAllowList = erc721a.generateContract({
    name: "Example & Fren ” 😃", // test special characters and unicode
    tokenSymbol: "EXPL😃",
    mintPrice: "0.005",
    description: 'Example\'s ("Description")',
    maxTokens: 100,
    layers: [
      { name: "example1😃", tiers: [2, 5, 10, 30, 40, 50, 1863] },
      {
        name: "example2😃",
        tiers: [40, 80, 100, 120, 160, 200, 250, 300, 350, 400],
      },
      {
        name: "example3😃",
        tiers: [
          10, 15, 20, 35, 50, 60, 65, 70, 75, 80, 90, 95, 150, 170, 180, 190,
          200, 215, 230,
        ],
      },
      {
        name: "example4😃",
        tiers: [
          10, 15, 20, 35, 50, 60, 70, 75, 80, 110, 115, 160, 220, 230, 240, 250,
          260,
        ],
      },
      { name: "example5😃", tiers: [200, 250, 280, 290, 300, 330, 350] },
      { name: "example6😃", tiers: [200, 300, 400, 500, 600] },
      {
        name: "example7😃",
        tiers: [
          40, 45, 55, 65, 80, 85, 95, 100, 110, 115, 120, 150, 220, 230, 240,
          250,
        ],
      },
      { name: "example8😃", tiers: [50, 750, 1200] },
      {
        name: "example9😃",
        tiers: [10, 80, 100, 180, 200, 210, 220, 230, 240, 260, 270],
      },
    ],
    maxMintPerAddress: 100,
    network: "rinkeby",
    royalties: 0,
    royaltiesRecipient: "",
    image: "",
    banner: "",
    website: "https://indeliblelabs.io",
    allowList: {
      maxPerAllowList: 1,
      price: "0",
    },
    contractName: "IndelibleERC721A",
  });
  await fs.writeFile(
    "./src/contracts/IndelibleERC721A-allowlist.sol",
    contractAllowList
  );
  const contract = erc721a.generateContract({
    name: "Example & Fren ” 😃", // test special characters and unicode
    tokenSymbol: "EXPL😃",
    mintPrice: "0.005",
    description: 'Example\'s ("Description")',
    maxTokens: 100,
    layers: [
      { name: "example1😃", tiers: [2, 5, 10, 30, 40, 50, 1863] },
      {
        name: "example2😃",
        tiers: [40, 80, 100, 120, 160, 200, 250, 300, 350, 400],
      },
      {
        name: "example3😃",
        tiers: [
          10, 15, 20, 35, 50, 60, 65, 70, 75, 80, 90, 95, 150, 170, 180, 190,
          200, 215, 230,
        ],
      },
      {
        name: "example4😃",
        tiers: [
          10, 15, 20, 35, 50, 60, 70, 75, 80, 110, 115, 160, 220, 230, 240, 250,
          260,
        ],
      },
      { name: "example5😃", tiers: [200, 250, 280, 290, 300, 330, 350] },
      { name: "example6😃", tiers: [200, 300, 400, 500, 600] },
      {
        name: "example7😃",
        tiers: [
          40, 45, 55, 65, 80, 85, 95, 100, 110, 115, 120, 150, 220, 230, 240,
          250,
        ],
      },
      { name: "example8😃", tiers: [50, 750, 1200] },
      {
        name: "example9😃",
        tiers: [10, 80, 100, 180, 200, 210, 220, 230, 240, 260, 270],
      },
    ],
    maxMintPerAddress: 100,
    network: "rinkeby",
    royalties: 0,
    royaltiesRecipient: "",
    image: "",
    banner: "",
    website: "https://indeliblelabs.io",
    contractName: "IndelibleNoAllowList",
  });
  await fs.writeFile(
    "./src/contracts/IndelibleERC721A-no-allowlist.sol",
    contract
  );
};

buildContracts();
