
import Table from 'react-bootstrap/Table';
import {  useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { DLT, REMOVE} from '../redux/actionsdata/action';
import ADD from '../redux/actionsdata/action';
import "../style.css";
import Cardsdata from './CardsData';

const CardsDetails = () => {
 
  const [data, setData] = useState(Cardsdata);
  const { id } = useParams();

  // const history = useNavigate();
  const dispatch = useDispatch();
  const getdata = useSelector((state) => state.cartreducer.carts);

  useEffect(() => {
    const compare = () => {
      const comparedata = getdata.filter((item) => item.id === parseInt(id));
      setData(comparedata);
    };
    compare();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id,getdata]);

  const send = (item) => {
    dispatch(ADD(item));
  };


  const dlt = (id) => {
    dispatch(DLT(id));
    // history("/");
  };

  const remove = (item) => {
    dispatch(REMOVE(item));
  };

  return (
    <div className="container mt-2">
      <h2 className='text-center'>Items Details Page</h2>
      
      <section className='container ' >
        <div className="itemsdetails">
          {data.map((ele, index) => (
            <div  key={index} className="item" >
              <div className="items_img">
                <img src={ele.imgdata} alt="" />
              </div>

              <div className="details">
                <Table>
                  <tbody>
                    <tr>
                      <td>
                        <p><strong>Restaurant</strong>: {ele.rname}</p>
                        <p><strong>Price</strong>: ₹{ele.price}</p>
                        <p><strong>Dishes</strong>: {ele.address}</p>
                        <p><strong>Total</strong>: ₹{ele.price * ele.qnty}</p>
                        <div className='mt-5 d-flex justify-content-between align-items-center' style={{ width: 100, cursor: "pointer", background: "#ddd", color: "#111" }}>
                          <span style={{ fontSize: 24 }} onClick={ele.qnty <= 1 ? () => dlt(ele.id) : () => remove(ele)}>-</span>
                          <span style={{ fontSize: 22 }}>{ele.qnty}</span>
                          <span style={{ fontSize: 24 }} onClick={() => send(ele)}>+</span>
                        </div>
                      </td>
                      <td>
                        <p><strong>Rating</strong>: <span style={{ background: "green", color: "#fff", padding: "2px 5px", borderRadius: "5px" }}>{ele.rating} ★ </span></p>
                        <p><strong>Order Review</strong>: <span>{ele.somedata}</span></p>
                        <p><strong>Remove</strong>: <span><i className='fas fa-trash' onClick={() => dlt(ele.id)} style={{ color: "red", fontSize: 20, cursor: "pointer" }}></i></span></p>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CardsDetails;