import { useQuery } from '@redwoodjs/web'

import { QUERY } from 'src/components/Person/PeopleTreeCell'

const PeopleReport1Page = () => {
  const { data: { people } = { people: [] } } = useQuery(QUERY)

  let keyGEN = new Array(16).fill(0)
  let peopleLink = [keyGEN]

  // 遞迴函式處理家族樹
  const processGeneration = (parentId, depth = 0) => {
    if (depth >= 16) return // 防止無限遞迴

    keyGEN[depth] = parentId

    const children = people.filter((person) => person.p0 === parentId)
    if (children.length === 0) {
      peopleLink.push([...keyGEN])
      return
    }

    children.forEach((child) => {
      processGeneration(child.x1 ?? 0, depth + 1)
    })
  }

  // 從第一個人開始處理
  processGeneration(people[0]?.x1 ?? 0)

  window.peopleLink = peopleLink

  return (
    <table border="1">
      <tbody>
        {peopleLink.map((item) => (
          <tr key={item.join('-')}>
            {item.map((key) => (
              <td key={key}>{key}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )

  //   return (
  //     <table border="1">
  //       <thead>
  //         <tr>
  //           <td width="80"></td>
  //           <td width="80">1世</td>
  //           <td width="80">2世</td>
  //           <td width="80">3世</td>
  //           <td width="80">4世</td>
  //           <td width="80">5世</td>
  //           <td width="80">6世</td>
  //           <td width="80">7世</td>
  //           <td width="80">8世</td>
  //           <td width="80">9世</td>
  //           <td width="80">10世</td>
  //           <td width="80">11世</td>
  //           <td width="80">12世</td>
  //         </tr>
  //         <tr>{peopleLink.length}</tr>
  //       </thead>
  //       <tbody>
  //         {/*
  //           <tr>
  //             <td></td>
  //             <td>{peopleLink[0]?.keyGEN[1] ?? ''}</td>
  //             <td>{peopleLink[0]?.keyGEN[2] ?? ''}</td>
  //             <td>{peopleLink[0]?.keyGEN[3] ?? ''}</td>
  //             <td>{peopleLink[0]?.keyGEN[4] ?? ''}</td>
  //             <td>{peopleLink[0]?.keyGEN[5] ?? ''}</td>
  //           </tr>

  //           <tr>
  //             <td></td>
  //             <td>{peopleLink[1].keyGEN[1]}</td>
  //             <td>{peopleLink[1].keyGEN[2]}</td>
  //             <td>{peopleLink[1].keyGEN[3]}</td>
  //             <td>{peopleLink[1].keyGEN[4]}</td>
  //             <td>{peopleLink[1].keyGEN[5]}</td>
  //           </tr>
  //           <tr>
  //             <td></td>
  //             <td>{peopleLink[2].keyGEN[1]}</td>
  //             <td>{peopleLink[2].keyGEN[2]}</td>
  //             <td>{peopleLink[2].keyGEN[3]}</td>
  //             <td>{peopleLink[2].keyGEN[4]}</td>
  //             <td>{peopleLink[2].keyGEN[5]}</td>
  //           </tr>
  //           <tr>
  //             <td></td>
  //             <td>{peopleLink[3].keyGEN[1]}</td>
  //             <td>{peopleLink[3].keyGEN[2]}</td>
  //             <td>{peopleLink[3].keyGEN[3]}</td>
  //             <td>{peopleLink[3].keyGEN[4]}</td>
  //             <td>{peopleLink[3].keyGEN[5]}</td>
  //           </tr>
  //           <tr>
  //             <td></td>
  //             <td>{peopleLink[0].keyGEN[1]}</td>
  //             <td>{peopleLink[0].keyGEN[2]}</td>
  //             <td>{peopleLink[0].keyGEN[3]}</td>
  //             <td>{peopleLink[0].keyGEN[4]}</td>
  //             <td>{peopleLink[0].keyGEN[5]}</td>
  //           </tr>
  // */}
  //       </tbody>
  //     </table>
  //   )
}

export default PeopleReport1Page
