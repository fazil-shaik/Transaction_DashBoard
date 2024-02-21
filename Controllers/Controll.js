const getdata = async(req,res)=>{
        const dat = fetch('https://s3.amazonaws.com/roxiler.com/product_transaction.json')
        .then((response)=>response.json())
        .then((data)=>res.send(data))
        .catch((err)=>console.log(err))
        console.log(dat)
}


module.exports = [getdata];