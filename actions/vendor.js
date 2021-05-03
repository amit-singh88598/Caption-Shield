import axios from "axios";
import jsCookies from "js-cookies";

module.exports = {
  // Get Vendor Total Available codes For Vendor Dashboard

  getCodes: async (vendorId, cb) => {
    try {
      const res = await axios.get(
        `${process.env.BASE_URL}/keys/vendor/remaining/${vendorId}`,
        {
          headers: {
            auth: jsCookies.getItem("auth"),
          },
        }
      );
      if (res && res.status == 200) {
        cb(null, res.data.data);
      } else {
        cb(res.data.message, null);
      }
    } catch (error) {
      console.log(error);
    }
  },

  //Search bar For Admin Dashboard

  searchKeys: async (key, cb) => {
    const res = await axios.get(`${process.env.BASE_URL}/keys/search/${key}`, {
      headers: {
        auth: jsCookies.getItem("auth"),
      },
    });
    if (res && res.status == 200) {
      cb(null, res.data);
    } else {
      cb(res.data.message, null);
    }
  },

  //get detail from key
  getCodeDetails: async (key, cb) => {
    const res = await axios.get(`${process.env.BASE_URL}/keys/${key}`, {
      headers: {
        auth: jsCookies.getItem("auth"),
      },
    });
    if (res && res.status == 200) {
      cb(null, res.data);
    } else {
      cb(res.data.message, null);
    }
  },

  // Get Vendor Profile Details For Vendor Dashboard

  getProfile: async (cb) => {
    try {
      const res = await axios.get(`${process.env.BASE_URL}/vendors/profile`, {
        headers: {
          auth: jsCookies.getItem("auth"),
        },
      });
      if (res && res.status == 200) {
        cb(null, res.data);
      } else {
        cb(res.data.message, null);
      }
    } catch (error) {
      cb(error, null);
    }
  },

  // Get All Users Profile Details For Admin Dashboard

  getAllUsersProfile: async (cb) => {
    const res = await axios.get(`${process.env.BASE_URL}/vendors/all/users`, {
      headers: {
        auth: jsCookies.getItem("auth"),
      },
    });
    if (res && res.status == 200) {
      cb(null, res.data);
    } else {
      cb(res.data.message, null);
    }
  },

  // Self Generated Code Users Profile Details for Admin Dashboard

  getSelfGeneratedUsersProfile: async (cb) => {
    const res = await axios.get(
      `${process.env.BASE_URL}/vendors/screch/users`,
      {
        headers: {
          auth: jsCookies.getItem("auth"),
        },
      }
    );
    if (res && res.status == 200) {
      cb(null, res.data);
    } else {
      cb(res.data.message, null);
    }
  },

  // Get Perticular Vendor User's List For Vendor Dashboard

  getUsersList: async (cb) => {
    const res = await axios.get(`${process.env.BASE_URL}/vendors/users`, {
      headers: {
        auth: jsCookies.getItem("auth"),
      },
    });
    if (res && res.status == 200) {
      cb(null, res.data);
    } else {
      cb(res.data.message, null);
    }
  },

  // Get All Vendors Details For Admin Dashboard

  getVendors: async (cb) => {
    const res = await axios.get(`${process.env.BASE_URL}/vendors`, {
      headers: {
        auth: jsCookies.getItem("auth"),
      },
    });
    if (res && res.status == 200) {
      cb(null, res.data);
    } else {
      cb(res.data.message, null);
    }
  },

  // Get Purchase Codes Details For Vendor Dashboard

  getPurchaseCodes: async (cb) => {
    const res = await axios.get(
      `${process.env.BASE_URL}/vendors/generateTime`,
      {
        headers: {
          auth: jsCookies.getItem("auth"),
        },
      }
    );
    if (res && res.status == 200) {
      cb(null, res.data);
    } else {
      cb(res.data.message, null);
    }
  },

  // Code Generation

  getGenerateCode: async (primaryNumber, code, cb) => {
    const res = await axios.get(
      `${process.env.BASE_URL}/keys/generate/${primaryNumber}/${code}`,
      {
        headers: {
          auth: jsCookies.getItem("auth"),
        },
      }
    );
    if (res && res.status == 200) {
      cb(null, res.data);
    } else {
      cb(res.data.message, null);
    }
  },

  //Today Sale Details For Admin Dashboard

  getTodaySaleDetails: async (cb) => {
    const res = await axios.get(
      `${process.env.BASE_URL}/vendors/keygenerate/today`,
      {
        headers: {
          auth: jsCookies.getItem("auth"),
        },
      }
    );
    if (res && res.status == 200) {
      cb(null, res.data);
    } else {
      cb(res.data.message, null);
    }
  },
};
