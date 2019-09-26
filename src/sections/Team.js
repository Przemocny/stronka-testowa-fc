import React from 'react'

import './Team.css'
// propsy
// iteracje w obrębie arraya z danymi
// komponent funkcyjny - SpecialistDescription

const specialistData1 = {
	fullname: 'Jan Kowalski',
	group: 'IT',
	description:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
	image: 'https://picsum.photos/640/640',
}

const specialistData2 = {
	fullname: 'Anna Nowakowska',
	group: 'HR',
	description:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
	image: 'https://picsum.photos/640/640',
}

const specialistData3 = {
	fullname: 'Janusz Kowalski',
	group: 'CEO',
	description:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
	image: 'https://picsum.photos/640/640',
}

const specialistData4 = {
	fullname: 'Adam Nawałka',
	group: 'Coach',
	description:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
	image: 'https://picsum.photos/640/640',
}

const specialists = [
	specialistData1,
	specialistData2,
	specialistData3,
	specialistData4,
]

// // zwykła funkcja
// function SpecialistDescription(...){
//     // tutaj coś robi
//     // jeśli jest return to coś zwraca
// }

// komponent funkcyjny to taka funkcja która wyświetla/zwraca html
// function SpecialistDescription(...){
//     // tutaj coś robi
//     // jeśli jest return to coś zwraca

//     return (<div></div>)
// }

// function fn(parametry){}
// deklaracja komponentu
const SpecialistDescription = (props) => {
	// tutaj coś robi
	// jeśli jest return to coś zwraca
	const { isEven, specialist } = props
	const { fullname, description, image, group } = specialist

	if (isEven) {
		return (
			<div className='row team-item'>
				
                <div className='col s3'>
                <img src={image} />
            </div>
            <div className='col s9'>
					<h4>
						{fullname} [{group}]
					</h4>
					<h6>{description}</h6>
                </div>
			</div>
		)
	} else {
		return (
			<div className='row team-item'>
				<div className='col s9'>
					<h4>
						{fullname} [{group}]
					</h4>
					<h6>{description}</h6>
                </div>
                <div className='col s3'>
					<img src={image} />
				</div>
			</div>
		)
	}
}

const Team = () => {
	return (
		<div className='team'>
			<div className='container'>
				<h1>Nasi specjaliści</h1>
				{/* wywołanie/użycie  
    <SpecialistDescription specialist={specialistData1} />
    <SpecialistDescription specialist={specialistData2} />
    <SpecialistDescription specialist={specialistData3} />
    <SpecialistDescription specialist={specialistData4} />
    */}

				{specialists.map((specialistData, index) => {
					return (
						<SpecialistDescription
							isEven={index % 2 == 0}
							specialist={specialistData}
							key={index}
						/>
					)
				})}
			</div>
		</div>
	)
}

export default Team
