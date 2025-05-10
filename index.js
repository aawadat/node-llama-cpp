const { startAirdrop } = require('airdrop-tea2');

(async () => {
  console.log("🚀 بدء Airdrop...");
  try {
    await startAirdrop({
      walletsFile: './wallets.txt',
      delay: 2000
    });
    console.log("✅ تم تنفيذ Airdrop بنجاح.");
  } catch (err) {
    console.error("❌ فشل تنفيذ Airdrop:", err);
  }
})();
