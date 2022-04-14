import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux'
import mapStateToProps from '../reducers/mapStateToProps'
import mapDispatchToProps from '../reducers/mapDispatchToProps'
import axios from 'axios'
 

function Table(props) {
    const base_url = "http://localhost:3001" 
    const editID = useRef()
 
    useEffect(() => {
      axios.get(`${base_url}/posts`)
        .then(response => {
          props.kurseLaden(response.data)
          
        })
        .catch(error => {
          console.log(error)
        })
    }, [])
    
    function deleteItem(id) {
        console.log(base_url)
        axios.delete(`${base_url}/posts/${id}/`)
        .then(() => {
            props.loeschenKurs(id)
        })
        .catch(error => {
          console.log(error)
        })
    }

    function trimer(str) {
        if (str === "") {return []} else
        {
            var arr = []
        str.split(/[,]+/).map(e => arr.push(e))
        return arr
    }
    }

    function detrimer(arr) {
        if (arr.length === 0) {return ""} else
        {
        const str = arr.map(e => `${e}`).join(',')
        return str
        }
    }



  /* Item hinzufügen oder updaten */
  const submitItem = (event) => {
    event.preventDefault()

    if (activeEdit) {
      axios.put(`${base_url}/posts/${editID.current}`, {
        "kursname": formData.kursname,
        "sitzungen": formData.sitzungen,
        "image": formData.image,
        "text": formData.text,
        "wirkungsweise": trimer(formData.wirkungsweise),
        "extra": trimer(formData.extra),
        "audiotitle": trimer(formData.audiotitle),
        "preis": formData.preis,
        "inappID": formData.inappID
      })
      .then(response => {
        const newData = props.kurse.map(ele => ele.id === editID.current ? response.data : ele)
        props.editKurs(newData)
        updateFormData({
          kursname: "",
          sitzungen: "",
          image: "",
          text: "",
          wirkungsweise: "",
          extra: "",
          audiotitle: "",
          preis: "",
          inappID: ""
        })
        updateActiveEdit(false)
      })
    } else {
      axios.post(`${base_url}/posts`, {
        "kursname": formData.kursname,
        "sitzungen": formData.sitzungen,
        "image": formData.image,
        "text": formData.text,
        "wirkungsweise": trimer(formData.wirkungsweise),
        "extra": trimer(formData.extra),
        "audiotitle": trimer(formData.audiotitle),
        "preis": formData.preis,
        "inappID": formData.inappID
      })
      .then(response => {
        updateFormData({
          kursname: "",
          sitzungen: "",
          image: "",
          text: "",
          wirkungsweise: "",
          extra: "",
          audiotitle: "",
          preis: "",
          inappID: ""
        })
        props.addKurs(response.data)
      })
      .catch(error => console.log("404"))
    }
  }

  /* Formulardaten */
  const [formData, updateFormData] = useState({
    kursname: "",
          sitzungen: "",
          image: "",
          text: "",
          wirkungsweise: "",
          extra: "",
          audiotitle: "",
          preis: "",
          inappID: ""
  })

  /* Form-Daten updaten */
  const formInput = (event) => {
    updateFormData(
      prevState => { return {...prevState, [event.target.name]: event.target.value}  }
    )
  }

  /* Boolean-Flag für den Bearbeiten-/Hinzufügen-Modus */
  const [activeEdit, updateActiveEdit] = useState(false)

  /* Umschalten des Bearbeiten-/Hinzufügen-Modus */
  const activateEdit = (id) => {
    if (activeEdit) {
      editID.current = 0
      updateFormData({
        kursname: "",
        sitzungen: "",
        image: "",
        text: "",
        wirkungsweise: "",
        extra: "",
        audiotitle: "",
        preis: "",
        inappID: ""
      })
      updateActiveEdit(false)
    } else {
      editID.current = id
      const currentItem = props.kurse.find(ele => ele.id === id)
      console.log(currentItem.extra)
      updateFormData({
        kursname: currentItem.kursname,
        sitzungen: currentItem.sitzungen,
        image: currentItem.image,
        text: currentItem.text,
        wirkungsweise: detrimer(currentItem.wirkungsweise),
        extra: detrimer(currentItem.extra),
        audiotitle: detrimer(currentItem.audiotitle),
        preis: currentItem.preis,
        inappID: currentItem.inappID
      })
      updateActiveEdit(true)
    }
  }

    return (
        <>
    <form onSubmit={submitItem}>
        <h3>{ activeEdit ? "Kurs bearbeiten" : "Neuer Kurs" }</h3>
        <input type="text" placeholder="Kursname" name="kursname" value={formData.kursname} onChange={formInput}/>
        <textarea type="text" placeholder="Text" name="text" value={formData.text} onChange={formInput}/>
        <input type="text" placeholder="Sitzungen" name="sitzungen" value={formData.sitzungen} onChange={formInput}/>
        <input type="text" placeholder="Wirkungsweise" name="wirkungsweise" value={formData.wirkungsweise} onChange={formInput}/>
        <input type="text" placeholder="Extras" name="extra" value={formData.extra} onChange={formInput}/>
        <input type="text" placeholder="Audiotitel" name="audiotitel" value={formData.audiotitle} onChange={formInput}/>
        <input type="text" placeholder="Preis" name="preis" value={formData.preis} onChange={formInput}/>
        <input type="text" placeholder="In-App ID" name="inappid" value={formData.inappID} onChange={formInput}/>
        <button>{ activeEdit ? "Bearbeiten" : "Hinzufügen" }</button>
      </form>
            	<table>
						<thead>
							<tr>
                <th>ID</th>
								<th>Kursname</th>
								<th>Sitzungen</th>
								<th>Wirkungsweise</th>
                <th>Extras</th>
                <th>Audiotitel</th>
                <th>Preis</th>
                <th>In-App ID</th>
                <th></th>
							</tr>
						</thead>
						<tbody>

               {
        props.kurse.length > 0 &&
        <>
          {
            props.kurse.map((ele, index) => (
              
              <tr key={ele.id}>
                <td>{ele.id}</td>
                <td>{ele.kursname}</td>
                <td>{ele.sitzungen}</td>
                <td><ul>{ele.wirkungsweise.map(e => <li>{e}</li>)}</ul></td>
                <td><ul>{ele.extra.map(e => <li>{e}</li>)}</ul></td>
                <td><ul>{ele.audiotitle.map(e => <li>{e}</li>)}</ul></td>
                <td>{ele.preis} EUR</td>
                <td>{ele.inappID}</td>
                <td>
                  <button onClick={() => activateEdit(ele.id)}>Edit</button>
                  <button onClick={() => deleteItem(ele.id)}>Löschen</button>
                  </td>
                
              </tr>
 
          ))
          }
          
        </>
      }
						</tbody>
					</table>
        </>
    );
}

export default connect(mapStateToProps, mapDispatchToProps) (Table);