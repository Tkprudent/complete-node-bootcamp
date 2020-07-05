const Tour = require('./../models/tourModels')

// We need to read the tours data before we can use it 
// const tours = JSON.parse(
//     fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
// );

// 2. ROUTE HANDLERS
exports.getAllTours = async (req, res) => {

    try{
        const tours = await Tour.find();

        res.status(200).json({
            status: 'success',
            requestedAt: req.requestTime,
            results: tours.length,
            data : {
                tours
            }
        });
    } catch(err){
        res.status(404).json({
            status: "fail",
            message: err
        });
    }  
};

exports.getTour =  (req, res) => {
    console.log(req.params);

    const id = req.params.id * 1;
    // const tour = tours.find(el => el.id === id);

    // res.status(200).json({
    //     status: 'success',
    //     data : {
    //         tour
    //     }
    // });
};

exports.createTour = async (req, res) => {
    try{

        const newTour = await Tour.create(req.body);
        res.status(201).json({
            status : "success",
            data: {
                tour: newTour
            }
        });
    } catch (err){
        res.status(400).json({
            status:"fail",
            message:"Invalid data sent"
        });
    }  
};

exports.updateTour = (req, res) => {
    res.status(200).json({
        status:"success",
        data: {
            tour: '<Updated tour here...>'
        }
    });
};
exports.deleteTour = (req, res) => {
    res.status(204).json({
        status:"success",
        data: null
    });
};