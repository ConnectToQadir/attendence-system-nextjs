import { useEffect, useState } from 'react'
import './table.css'
import axios from 'axios'
import Expand from 'react-expand-animated';


const Table = () => {

    var limit = 50

    const [enquiriesLoading, setEnquiriesLoading] = useState(false)
    const [filtersDropDown, setFilterDropDown] = useState(false)
    const [filter1, setFilter1] = useState(false)
    const [filter2, setFilter2] = useState(false)


    var [enquiries, setEnquiries] = useState({})
    var [loadAgain, setLoadAgain] = useState(false)
    var [currentPage, setCurrentPage] = useState(1)
    var [shownPage, setShownPage] = useState(1)

    // Filters state Start -----------------------------------------------------------==>
    const [filters, setFilters] = useState({
        fDate: "",
        tDate: "",
        branch: "",
        gender: "",
        edu: "",
        eTest: "",
        pCountries: [],
        refTo: "",
        conStatus: ""
    })
    const handleFiltersChange = (e) => {
        if (e.target.name === "pCountries") {
            let copy = { ...filters }
            if (e.target.checked) {
                copy.pCountries.push(e.target.value)
            } else {
                copy.pCountries = copy.pCountries.filter(el => el !== e.target.value)
            }
            setFilters(copy)
        } else {
            setFilters(() => ({
                ...filters,
                [e.target.name]: e.target.value
            }))
        }
        setLoadAgain(!loadAgain)
    }
    // Filters state End   -----------------------------------------------------------==>



    // Fetch Enquiries Through API Start ---------------------------------------------==>

    const fetchEquiries = async () => {
        try {
            setEnquiriesLoading(true)
            const { data } = await axios.get(`https://edifygroup.herokuapp.com/api/apply?page=${currentPage}&limit=50${filters.pCountries.length ? `&pCountries=${filters.pCountries}` : ""}${filters.conStatus ? `&conStatus=${filters.conStatus}` : ""}`)
            setShownPage(currentPage)
            setEnquiries(data)
        } catch (error) {
            alert("Something Went Wrong while Fetching Enquiries")
        } finally {
            setEnquiriesLoading(false)
        }
    }

    useEffect(() => {
        fetchEquiries()
    }, [loadAgain, currentPage])

    // Fetch Enquiries Through API End -----------------------------------------------==>


    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    return (
        <div className='Table'>


            <div className="tableHead">
                <h2>Enquiries</h2>
            </div>


            {/* Filters Section Start --------------------------------------------------------------------------- */}
            <div className="filtersSection">

                <div className="filtersHeader">

                    {/* Filters Buttons */}
                    <div className="filtersBtn">

                        <button onClick={() => setFilterDropDown(!filtersDropDown)} className={`${filtersDropDown ? "active" : ""}`} ><i className='bx bx-filter-alt'></i> Filters <span className="noOfFilters">0</span> </button>


                        <div className={`filtersDropDown ${filtersDropDown ? "active" : ""}`}>
                            <h3>Filters</h3>
                            <div className="allItems">

                                {/* All Filters DropDown Start ------------------------- */}

                                <div className="eachItem">
                                    <div onClick={() => { setFilter1(!filter1) }} className="filterHead"><i style={{ transform: `rotate(${filter1 ? "180deg" : "0deg"})` }} className='bx bx-chevron-down'></i>Country</div>
                                    <Expand open={filter1}>
                                        <div className="filtersBody">
                                            <div className="filtersSearchInput">
                                                <input type="text" placeholder='Search Country' />
                                                <i className='bx bx-search' ></i>
                                            </div>
                                            <div className="checkboxes">
                                                <div className="eachCheckBox"><input onChange={e => handleFiltersChange(e)} name='pCountries' checked={filters.pCountries.includes('Australia')} value='Australia' type="checkbox" id='Australia' /><label htmlFor="Australia">Australia</label></div>
                                                <div className="eachCheckBox"><input onChange={e => handleFiltersChange(e)} name='pCountries' checked={filters.pCountries.includes('UK')} value='UK' type="checkbox" id='UK' /><label htmlFor="UK">UK</label></div>
                                                <div className="eachCheckBox"><input onChange={e => handleFiltersChange(e)} name='pCountries' checked={filters.pCountries.includes('USA')} value='USA' type="checkbox" id='USA' /><label htmlFor="USA">USA</label></div>
                                                <div className="eachCheckBox"><input onChange={e => handleFiltersChange(e)} name='pCountries' checked={filters.pCountries.includes('Sweden')} value='Sweden' type="checkbox" id='Sweden' /><label htmlFor="Sweden">Sweden</label></div>
                                                <div className="eachCheckBox"><input onChange={e => handleFiltersChange(e)} name='pCountries' checked={filters.pCountries.includes('Canada')} value='Canada' type="checkbox" id='Canada' /><label htmlFor="Canada">Canada</label></div>
                                            </div>
                                            <span className="viewAllBtn">View all...</span>
                                        </div>
                                    </Expand>
                                </div>

                                <div className="eachItem">
                                    <div onClick={() => { setFilter2(!filter2) }} className="filterHead"><i style={{ transform: `rotate(${filter2 ? "180deg" : "0deg"})` }} className='bx bx-chevron-down'></i>Status</div>
                                    <Expand open={filter2}>
                                        <div className="filtersBody">
                                            <div className="filtersSearchInput">
                                                <input type="text" placeholder='Search Status' />
                                                <i className='bx bx-search' ></i>
                                            </div>
                                            <div className="checkboxes">
                                                <div className="eachCheckBox"><input onChange={e => handleFiltersChange(e)} name='conStatus' checked={filters.conStatus.includes('Pending')} value='Pending' type="radio" id='Pending' /><label htmlFor="Pending">Pending</label></div>
                                                <div className="eachCheckBox"><input onChange={e => handleFiltersChange(e)} name='conStatus' checked={filters.conStatus.includes('Referred')} value='Referred' type="radio" id='Referred' /><label htmlFor="Referred">Referred</label></div>
                                                <div className="eachCheckBox"><input onChange={e => handleFiltersChange(e)} name='conStatus' checked={filters.conStatus.includes('Contacted')} value='Contacted' type="radio" id='Contacted' /><label htmlFor="Contacted">Contacted</label></div>
                                            </div>
                                            <span className="viewAllBtn">View all...</span>
                                        </div>
                                    </Expand>
                                </div>

                                {/* All Filters DropDown End   ------------------------- */}

                            </div>
                        </div>
                    </div>

                    {/* Pagination Section Start ------------------------ */}
                    <div className="pagination">
                        <div className="current">
                            {shownPage === 1 ? 1 : ((shownPage - 1) * limit)}-{shownPage * limit} of {enquiries?.count}
                        </div>
                        <div className="nextPrevBtns">
                            <button disabled={currentPage === 1} data-tooltip="Newer" aria-disabled onClick={() => setCurrentPage(currentPage - 1)} className="prev toolTip"><i className='bx bx-chevron-left'></i></button>
                            <button data-tooltip="Older" onClick={() => setCurrentPage(currentPage + 1)} className="next toolTip"><i className='bx bx-chevron-right'></i></button>
                        </div>
                    </div>
                    {/* Pagination Section End   ------------------------ */}


                </div>


                {/* Applied Filter Showing with remove buttons Start ------------------------------------------------------ */}
                <div className="appliedFilters">

                    {
                        filters.pCountries.length ?
                            <div className="eachItem">
                                <div className="name">Countries</div>
                                <div className="supportiveText">contain</div>
                                <div className="appliedFiltersName">{filters.pCountries.toString()}</div>
                                <i onClick={() => setFilters({ ...filters, pCountries: [] })} title='Remove Filter' className='bx bx-x'></i>
                            </div>
                            :
                            <></>
                    }

                    {
                        filters.conStatus ?
                            <div className="eachItem">
                                <div className="name">Status</div>
                                <div className="supportiveText">is</div>
                                <div className="appliedFiltersName">{filters.conStatus.toString()}</div>
                                <i onClick={() => setFilters({ ...filters, conStatus: "" })} title='Remove Filter' className='bx bx-x'></i>
                            </div>
                            :
                            <></>
                    }


                </div>
                {/* Applied Filter End   ------------------------------------------------------ */}


            </div>
            {/* Filters Section End   --------------------------------------------------------------------------- */}



            <div className="tableBody">
                <table>
                    <thead>
                        <tr>
                            <th><input type="checkbox" /></th>
                            <th>Date</th>
                            <th className='textCenter' >Status</th>
                            <th>Name</th>
                            <th className='textCenter' >Type</th>
                            <th className='textCenter' >Test</th>
                            <th>Countries</th>
                            <th>Mobile</th>
                            <th>City</th>
                            <th>Course</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            enquiriesLoading ?

                                // enquiries Loading State
                                [1, 1, 1, 1, 1, 1].map((v, i) => {
                                    return (
                                        <tr key={i} className='loading' >
                                            <td><span></span></td>
                                            <td><span></span></td>
                                            <td><span></span></td>
                                            <td><span></span></td>
                                            <td><span></span></td>
                                            <td><span></span></td>
                                            <td><span></span></td>
                                            <td><span></span></td>
                                            <td><span></span></td>
                                            <td><span></span></td>
                                        </tr>
                                    )
                                })
                                :

                                // enquiries Loaded
                                enquiries?.data?.map((v, i) => {
                                    return (
                                        <tr key={i} >
                                            <td><input type="checkbox" /></td>
                                            <td>{new Date(v.createdAt).getDate()}   {months[new Date(v.createdAt).getMonth()]}</td>
                                            <td className='status' >
                                                <p> <span className={`dot ${v.conStatus.toLowerCase()}`}></span> <span>{v.conStatus}</span></p>
                                            </td>
                                            <td style={{ color: "#000", fontWeight: "500" }}> <div className='imgDivTd'><div className="imgDiv"><img src="images/user.jpg" alt="" /></div> {v.name}</div></td>
                                            <td className='textCenter' >Web</td>
                                            <td className='textCenter' >{v.eTest === "Y" ? <i className='bx bx-check' ></i> : <i className='bx bx-x'></i>}</td>
                                            <td>{v.pCountries.toString()}</td>
                                            <td>{v.phone}</td>
                                            <td>{v.city}</td>
                                            <td><p className='pCourseOverflow' title={v.pCourse} >{v.pCourse}</p></td>
                                            <td className='actionsBox'>
                                                <div data-tooltip="Follow Up" className="eachAction toolTip">
                                                    <i className='bx bx-share-alt'></i>
                                                </div>
                                                <div data-tooltip="Edit" className="eachAction toolTip">
                                                    <i className='bx bx-edit'></i>
                                                </div>
                                                <div data-tooltip="Delete" className="eachAction toolTip">
                                                    <i className='bx bx-trash' ></i>
                                                </div>
                                                <div data-tooltip="Whatsapp Now" className="eachAction toolTip">
                                                    <i className='bx bxl-whatsapp' ></i>
                                                </div>
                                                <div data-tooltip="Mail Now" className="eachAction toolTip">
                                                    <i className='bx bx-envelope' ></i>
                                                </div>

                                            </td>
                                        </tr>
                                    )
                                })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table