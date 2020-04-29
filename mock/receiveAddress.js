

function getList(req, res) {
  const { current=1, pageSize=10 } = req;
  const data = [
    {
      key: "1",
      name: "John Brown",
      area: '上海',
      telephone: '139xxxxxxxx',
      phone: '',
      isDefault: true,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"]
    },
    {
      key: "1",
      name: "John Brown",
      area: '上海',
      telephone: '139xxxxxxxx',
      phone: '',
      isDefault: false,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"]
    },
    {
      key: "1",
      name: "John Brown",
      area: '上海',
      telephone: '139xxxxxxxx',
      phone: '',
      isDefault: false,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"]
    },
    {
      key: "1",
      name: "John Brown",
      area: '上海',
      telephone: '139xxxxxxxx',
      phone: '',
      isDefault: false,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"]
    },
  ]
  setTimeout(() => {
    return res.json({
      datas: {
        total: 12,
        data: data,
        current: current,
        pageSize: pageSize,
      } ,
      success: true,
      code: 200
    })
  }, 1000)
  
}

function deleteAdd(req, res) {
  return res.json({
    datas: {
      success: 'ok'
    }
  })
}


export default {
  'GET /api/getAddressList': getList,
  'POST /api/deleteAddress': deleteAdd,
};