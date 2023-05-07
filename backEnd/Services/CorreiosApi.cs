using System.Net.Http;
using System.Threading.Tasks;
using System;
using backEnd.Models;
using System.Text.Json;

namespace backEnd.Services
{
    public class CorreiosApi
    {
        private const string ApiUrl = "https://viacep.com.br/ws/{0}/json/";

        public async Task<EnderecoResponse> RastrearObjeto(string codigo)
        {
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri(string.Format(ApiUrl, codigo));

                var response = await client.GetAsync("");
                response.EnsureSuccessStatusCode();

                var result = await response.Content.ReadAsStringAsync();
                var enderecoResponse = JsonSerializer.Deserialize<EnderecoResponse>(result);

                return enderecoResponse;
            }
        }
    }
}
