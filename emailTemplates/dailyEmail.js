function formatDailyEmail(sortedItems) {
    const categories = Object.keys(sortedItems);
    // console.log(categories)
    const contentsHTMLArray = categories.map((category)=>{
        const items = Object.keys(sortedItems[category]);
        const itemsArrey = items.reduce((acc,item)=>{
            if (sortedItems[category][item] && sortedItems[category][item]["note"]) {
                const note =sortedItems[category][item]["note"]
                return acc+`<li>${item}</li><ul><li>${note}</li></ul>`}
            return acc+`<li>${item}</li>`
        },'')
        return itemsArrey});
    
    const combineContentsArray = contentsHTMLArray.reduce((acc,contentHTML)=> {
        return acc + contentHTML
    })
    // console.log('formatDailyEmail ',combineContentsArray)
    return constructEmail(greetingToRobin, combineContentsArray, signatureAndStyle)
    // return combineContentsArray
    // const greeting = `<div dir="ltr">Hi Robin,</div>`;
    // const list =`<li>${}</li>`
    // const lists = `<div dir="ltr"><ul><li>[Doc] Admin 架構圖</li><li>[Doc] 官網退貨機制、圖</li><li>[Doc] 1999 更新部落客分潤餐廳名單 SOP 文件</li><li>[Doc] 補完 EZTABLE 所有服務部屬方式</li><ul><li>&nbsp; &nbsp; &nbsp;-今日補齊 aws 相關</li></ul><li>[Doc] Algolia 資料來源欄位對應文件 (25%)</li><li>[1999] 更新部落客分潤餐廳名單</li><li>[1999] 修改訂單狀態</li><li>[1999] 開放電話權限</li><li>[BPM] 1999 項目_IOS &amp; Android App管理後台權限確認</li><ul><li>&nbsp; &nbsp; &nbsp;-已用 it 帳號來執行開啟 android 留言權限</li></ul><li>[SRE] App Source Code上GitHub &gt; 250MB解決方案</li><ul><li>&nbsp;-測試中</li></ul><li>[SCU] 消費者 app React Native code merge and debug&nbsp;</li><ul><li>&nbsp; &nbsp; &nbsp;-進行 merge and debug 中</li></ul><li>[BPM] MKT需求完成 40% (資料表都已開啟，程式碼尚未更新)</li></ul><div><div><br></div>-- <br><div dir="ltr"><div dir="ltr"><p dir="ltr" style="color:rgb(0,0,0);font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;line-height:1.38;margin-top:0pt;margin-bottom:0pt"><span style="vertical-align:baseline;white-space:pre-wrap">Best Regards,</span></p><p dir="ltr" style="color:rgb(0,0,0);font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;line-height:1.38;margin-top:0pt;margin-bottom:0pt"><span style="vertical-align:baseline;white-space:pre-wrap"> </span></p><p style="color:rgb(0,0,0);font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;line-height:1.38;margin-top:0pt;margin-bottom:0pt"><span style="white-space:pre-wrap"><b>Yuchia Chang</b></span></p><p dir="ltr" style="color:rgb(0,0,0);font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;line-height:1.38;margin-top:0pt;margin-bottom:0pt"><span style="vertical-align:baseline;white-space:pre-wrap">Backend Developer </span></p><p dir="ltr" style="color:rgb(0,0,0);font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;line-height:1.38;margin-top:0pt;margin-bottom:0pt"><span style="vertical-align:baseline;white-space:pre-wrap"> </span></p><p dir="ltr" style="color:rgb(0,0,0);font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;line-height:1.38;margin-top:0pt;margin-bottom:0pt"><font color="#000000"><span style="font-weight:700;vertical-align:baseline;white-space:pre-wrap">EZTABLE</span><span style="font-weight:700;vertical-align:baseline;white-space:pre-wrap"> </span><b>Taiwan</b></font></p><div dir="ltr" style="color:rgb(0,0,0);font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif"><span style="text-align:right">5F. No.178, Sec. 1, Keelung Rd., Xinyi Dist., Taipei City 110, Taiwan</span></div><div dir="ltr" style="color:rgb(0,0,0);font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif"><font size="2" color="#000000">台北市信義區基隆路一段178號5樓</font></div><p dir="ltr" style="color:rgb(0,0,0);font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;line-height:1.38;margin-top:0pt;margin-bottom:0pt"><font color="#000000"><span style="vertical-align:baseline;white-space:pre-wrap">Mobile:</span><span style="vertical-align:baseline;white-space:pre-wrap"> +886 980 079 857</span></font></p><p dir="ltr" style="color:rgb(0,0,0);font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;line-height:1.38;margin-top:0pt;margin-bottom:0pt"><font color="#000000"><span style="vertical-align:baseline;white-space:pre-wrap">Email: </span><span style="vertical-align:baseline;white-space:pre-wrap"><a href="mailto:Yuchia.Chang@eztable.com" rel="noreferrer" target="_blank">Yuchia.Chang@eztable.com</a></span></font></p><p dir="ltr" style="color:rgb(0,0,0);font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;line-height:1.38;margin-top:0pt;margin-bottom:0pt"><span style="vertical-align:baseline;white-space:pre-wrap">i</span><font size="2"><span style="line-height:1.2em;outline:none;vertical-align:baseline;white-space:pre-wrap">OS App: </span><font style="color:rgb(0,0,255)"><span style="white-space:pre-wrap"><u><a href="https://apple.co/2BVhhXr" rel="noreferrer" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://apple.co/2BVhhXr&amp;source=gmail&amp;ust=1623689284279000&amp;usg=AFQjCNF_WY8SYM7v7RghoDZsnfD79_PWKw">https://apple.co/2BVhhXr</a></u></span></font><span style="line-height:1.2em;outline:none;vertical-align:baseline;white-space:pre-wrap">/ Android App: </span></font><font style="color:rgb(0,0,255)"><span style="white-space:pre-wrap"><u><a href="http://bit.ly/2N3Yrl2" rel="noreferrer" target="_blank" data-saferedirecturl="https://www.google.com/url?q=http://bit.ly/2N3Yrl2&amp;source=gmail&amp;ust=1623689284279000&amp;usg=AFQjCNHY-kwIugT4ROaBWedn4NTSQDyHEg">http://bit.ly/2N3Yrl2</a></u></span></font></p></div></div></div></div>`
}

const greetingToRobin = `
    <div dir="ltr">Hi Robin,</div>
`;

function constructEmail (greeting, content,signature) {
    const body =`
    <div dir="ltr">
        ${greeting}
        <div dir="ltr">
            <ul>
                ${content}
            </ul>
            ${signature}
        </div>
    </div>`;
    return body

}


const signatureAndStyle = `
    <div>
        <div><br></div>
        -- <br>
        <div dir="ltr">
            <div dir="ltr">
                <p dir="ltr" style="color:rgb(0,0,0);font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;line-height:1.38;margin-top:0pt;margin-bottom:0pt"><span style="vertical-align:baseline;white-space:pre-wrap">Best Regards,</span></p><p dir="ltr" style="color:rgb(0,0,0);font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;line-height:1.38;margin-top:0pt;margin-bottom:0pt"><span style="vertical-align:baseline;white-space:pre-wrap"> </span></p><p style="color:rgb(0,0,0);font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;line-height:1.38;margin-top:0pt;margin-bottom:0pt"><span style="white-space:pre-wrap"><b>Yuchia Chang</b></span></p><p dir="ltr" style="color:rgb(0,0,0);font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;line-height:1.38;margin-top:0pt;margin-bottom:0pt"><span style="vertical-align:baseline;white-space:pre-wrap">Backend Developer </span></p><p dir="ltr" style="color:rgb(0,0,0);font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;line-height:1.38;margin-top:0pt;margin-bottom:0pt"><span style="vertical-align:baseline;white-space:pre-wrap"> </span></p><p dir="ltr" style="color:rgb(0,0,0);font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;line-height:1.38;margin-top:0pt;margin-bottom:0pt"><font color="#000000"><span style="font-weight:700;vertical-align:baseline;white-space:pre-wrap">EZTABLE</span><span style="font-weight:700;vertical-align:baseline;white-space:pre-wrap"> </span><b>Taiwan</b></font></p><div dir="ltr" style="color:rgb(0,0,0);font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif"><span style="text-align:right">5F. No.178, Sec. 1, Keelung Rd., Xinyi Dist., Taipei City 110, Taiwan</span></div><div dir="ltr" style="color:rgb(0,0,0);font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif"><font size="2" color="#000000">台北市信義區基隆路一段178號5樓</font></div><p dir="ltr" style="color:rgb(0,0,0);font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;line-height:1.38;margin-top:0pt;margin-bottom:0pt"><font color="#000000"><span style="vertical-align:baseline;white-space:pre-wrap">Mobile:</span><span style="vertical-align:baseline;white-space:pre-wrap"> +886 980 079 857</span></font></p><p dir="ltr" style="color:rgb(0,0,0);font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;line-height:1.38;margin-top:0pt;margin-bottom:0pt"><font color="#000000"><span style="vertical-align:baseline;white-space:pre-wrap">Email: </span><span style="vertical-align:baseline;white-space:pre-wrap"><a href="mailto:Yuchia.Chang@eztable.com" rel="noreferrer" target="_blank">Yuchia.Chang@eztable.com</a></span></font></p><p dir="ltr" style="color:rgb(0,0,0);font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;line-height:1.38;margin-top:0pt;margin-bottom:0pt"><span style="vertical-align:baseline;white-space:pre-wrap">i</span><font size="2"><span style="line-height:1.2em;outline:none;vertical-align:baseline;white-space:pre-wrap">OS App: </span><font style="color:rgb(0,0,255)"><span style="white-space:pre-wrap"><u><a href="https://apple.co/2BVhhXr" rel="noreferrer" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://apple.co/2BVhhXr&amp;source=gmail&amp;ust=1623734459065000&amp;usg=AFQjCNFky3dXNoD-9jwpdpKlSIvTOZfXBQ">https://apple.co/2BVhhXr</a></u></span></font><span style="line-height:1.2em;outline:none;vertical-align:baseline;white-space:pre-wrap">/ Android App: </span></font><font style="color:rgb(0,0,255)"><span style="white-space:pre-wrap"><u><a href="http://bit.ly/2N3Yrl2" rel="noreferrer" target="_blank" data-saferedirecturl="https://www.google.com/url?q=http://bit.ly/2N3Yrl2&amp;source=gmail&amp;ust=1623734459065000&amp;usg=AFQjCNFQssFWyXoVeu-4Xa3N4N5bb8iIOg">http://bit.ly/2N3Yrl2</a></u></span></font></p>
            </div>
        </div>
    </div>
`;

module.exports = { formatDailyEmail }