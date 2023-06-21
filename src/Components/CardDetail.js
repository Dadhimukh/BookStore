import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Remove } from "../Redux/Actions/action";
import { Add, individualRemove } from "../Redux/Actions/action";

function CardDetail() {
  const [data, setData] = useState([]);
  //console.log(data);

  const { id } = useParams();
  //console.log(id);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const getdata = useSelector((state) => state.cartreducer.carts);
  //console.log(getdata);

  const compare = () => {
    let comparedata = getdata.filter((e) => {
      return e.id == id;
    });
    console.log(comparedata);
    setData(comparedata);
  };

  useEffect(() => {
    compare();
  }, [id]);

  const send = (e) => {
    dispatch(Add(e));
  };

  const dlt = (id) => {
    dispatch(Remove(id));
    navigate("/");
  };

  const dlt_one = (id) => {
    dispatch(individualRemove(id));
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Book Details </h2>
      <section className="container mt-5">
        <div className="iteamsdetails" style={{ backgroundColor: "white" }}>
          {data.map((data) => {
            return (
              <>
                <div className="items_img">
                  <img
                    src={data.imgdata}
                    alt="food"
                    style={{ width: "20rem", height: "16rem" }}
                  />
                </div>
                <div className="details">
                  <Table>
                    <tr>
                      <td>
                        <p>
                          <strong>Book Name :</strong> {data.title}
                        </p>
                        <p>
                          <strong>Price :</strong> ₹ {data.price}
                        </p>
                      </td>
                      <td>
                        <p>
                          <strong>Rating :</strong>{" "}
                          <span
                            style={{
                              background: "green",
                              color: "white",
                              padding: "2px 5px",
                              borderRadius: "5px",
                            }}
                          >
                            {data.rating}★
                          </span>
                        </p>
                        <p>
                          <span>
                            <strong>Subtitle : </strong>
                            {data.subtitle}
                          </span>
                        </p>

                        <p>
                          <strong>Oder Review : </strong>
                          <span>{data.somedata}</span>
                        </p>
                      </td>
                    </tr>
                  </Table>
                  <div>
                    <button
                      onClick={() => {
                        window.open(data.url, "_blank");
                      }}
                    >
                      More Details
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </div>
  );
}
export default CardDetail;
