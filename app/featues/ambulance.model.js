module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        name: String,
        phone:String,
        location: String,
        state: String
        
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Ambulance = mongoose.model("ambulance", schema);
    return Ambulance;
  };
  
