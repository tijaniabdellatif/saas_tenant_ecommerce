<?php

namespace App\Http\Controllers\Tenant;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Tenant\Tenant;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rules\Password;

class TenantController extends Controller
{
    public function getAllTenantsWithFormattedDomains()
    {
        $tenants = Tenant::with('domains')->get();

        // Transform the collection to include the attached domains property
        $formattedTenants = $tenants->map(function ($tenant) {
            $tenantData = $tenant->toArray();

            // Map all domains to the format you want
            $tenantData['attached_domains'] = $tenant->domains->map(function ($domain) {
                return [
                    'id' => $domain->id,
                    'name' => $domain->domain
                ];
            })->toArray();

            // Remove the original domains array if you don't need it
            unset($tenantData['domains']);

            return $tenantData;
        });

        return $formattedTenants;
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $formattedTenants = $this->getAllTenantsWithFormattedDomains();

       
        return Inertia::render('Tenant/Index', [
            'tenants' => 'tenants',
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

        return inertia::render('Tenant/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $fullDomain = $request->domain . '.' . config('app.domain');

        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:255', 'unique:tenants,name'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:tenants,email'],
            "password" => ['required', 'string', 'confirmed', Password::defaults()],
            'domain' => ['required', 'string', 'max:255', function ($attribute, $value, $fail) use ($fullDomain) {
                if (Tenant::whereHas('domains', function ($query) use ($fullDomain) {
                    $query->where('domain', $fullDomain);
                })->exists()) {
                    $fail('This domain is already taken');
                }
            }],
        ]);



        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }


        $tenant = Tenant::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);

        $tenant->domains()->create([
            'domain' => $fullDomain

        ]);

        return redirect()->route('dashboard')->with('success', 'Tenant created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(Tenant $tenant)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Tenant $tenant)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Tenant $tenant)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Tenant $tenant)
    {
        //
    }
}
