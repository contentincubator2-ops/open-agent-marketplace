async function loadJson(path){ const res = await fetch(path); return res.json(); }
function agentCard(a){ return `<article class="card"><h3>${a.slug}.md</h3><p><b>${a.title}</b> · ${a.name}</p><p>${a.summary}</p><span class="tag">${a.layer}</span><span class="tag">${a.category}</span><span class="tag">${a.primarySkill}</span></article>`; }
function squadCard(s){ return `<article class="card"><h3>${s.slug}.json</h3><p><b>${s.name}</b></p><p>${s.summary}</p>${s.agents.map(a=>`<span class="tag">${a}</span>`).join('')}</article>`; }
async function main(){
  const agents = await loadJson('/data/agents.sample.json');
  const squads = await loadJson('/data/squads.sample.json');
  const grid = document.getElementById('agentGrid');
  const render = q => { const needle = q.toLowerCase(); grid.innerHTML = agents.filter(a => JSON.stringify(a).toLowerCase().includes(needle)).map(agentCard).join(''); };
  render('');
  document.getElementById('q').addEventListener('input', e => render(e.target.value));
  document.getElementById('squadGrid').innerHTML = squads.map(squadCard).join('');
}
main();
