const transaction = async(req,res)=>{
    try {
        const { month, search = '', page = 1, perPage = 10 } = req.query;
        
        // Construct the query based on the month and search parameters
        const query = {
            $and: [
                { dateOfSale: { $regex: month, $options: 'i' } }, // Match month regardless of the year
                {
                    $or: [
                        { title: { $regex: search, $options: 'i' } },
                        { description: { $regex: search, $options: 'i' } },
                        { price: { $regex: search, $options: 'i' } }
                    ]
                }
            ]
        };
        
        const totalCount = await Transaction.countDocuments(query);
        const totalPages = Math.ceil(totalCount / perPage);
        
        const transactions = await Transaction.find(query)
            .skip((page - 1) * perPage)
            .limit(parseInt(perPage));
        
        res.json({
            transactions,
            totalPages,
            currentPage: parseInt(page),
            perPage: parseInt(perPage),
            totalCount
        });
    } catch (err) {
        console.error('Error fetching transactions:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
module.exports = transaction;