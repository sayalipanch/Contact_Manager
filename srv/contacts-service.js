const cds = require("@sap/cds");

module.exports = (srv) => {
  const { Contact } = cds.entities;


  srv.on("getID", async (req) => {
    const { name } = req.data;
    let uuid = "223d69a2-6ca6-4d01-88be-7fd02b98d778";
    const tx = srv.transaction(req);
    let res = await tx.read(Contact).where("name =", name);
    return res[0].ID;
  });
};

// module.exports = cds;
